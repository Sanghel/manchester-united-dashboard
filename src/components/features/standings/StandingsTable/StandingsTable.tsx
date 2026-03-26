import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/feedback/Spinner'
import { EmptyState } from '@/components/ui/feedback/EmptyState'
import { useStandings } from '@/hooks/sports'
import type { Standing } from '@/services/sports'

const FORM_COLOR: Record<string, string> = {
  W: 'bg-green-500',
  D: 'bg-yellow-400',
  L: 'bg-red-500',
}

function FormBadge({ result }: { result: string }) {
  return (
    <span
      className={cn(
        'inline-flex w-5 h-5 items-center justify-center rounded-full text-white text-[10px] font-bold',
        FORM_COLOR[result] ?? 'bg-gray-300'
      )}
      aria-label={result === 'W' ? 'Win' : result === 'D' ? 'Draw' : 'Loss'}
    >
      {result}
    </span>
  )
}

function StandingRow({
  standing,
  highlightTeamId,
}: {
  standing: Standing
  highlightTeamId?: number
}) {
  const isHighlighted = standing.team.id === highlightTeamId
  return (
    <tr
      className={cn(
        'border-b border-gray-100 hover:bg-gray-50 transition-colors',
        isHighlighted && 'bg-red-50 font-semibold'
      )}
      aria-current={isHighlighted ? 'true' : undefined}
    >
      <td className="py-2 px-3 text-sm text-center text-gray-500 w-8">{standing.position}</td>
      <td className="py-2 px-3">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded-full flex-shrink-0"
            style={{ backgroundColor: standing.team.primaryColor ?? '#ccc' }}
            aria-hidden="true"
          />
          <span className="text-sm font-medium truncate">{standing.team.name}</span>
        </div>
      </td>
      <td className="py-2 px-3 text-sm text-center tabular-nums">{standing.played}</td>
      <td className="py-2 px-3 text-sm text-center tabular-nums">{standing.won}</td>
      <td className="py-2 px-3 text-sm text-center tabular-nums">{standing.drawn}</td>
      <td className="py-2 px-3 text-sm text-center tabular-nums">{standing.lost}</td>
      <td className="py-2 px-3 text-sm text-center tabular-nums">
        {standing.goalDifference > 0 ? `+${standing.goalDifference}` : standing.goalDifference}
      </td>
      <td className="py-2 px-3 text-sm text-center tabular-nums font-bold">{standing.points}</td>
      <td className="py-2 px-3 hidden md:table-cell">
        <div className="flex gap-1">
          {standing.form?.map((r, i) => (
            <FormBadge key={i} result={r} />
          ))}
        </div>
      </td>
    </tr>
  )
}

export interface StandingsTableProps {
  leagueId: number
  season: string
  /** Highlight a specific team by ID */
  highlightTeamId?: number
  className?: string
}

export function StandingsTable({
  leagueId,
  season,
  highlightTeamId,
  className,
}: StandingsTableProps) {
  const { data: standings, isLoading, isError } = useStandings({ leagueId, season })

  if (isLoading) {
    return (
      <div className="flex justify-center py-12" aria-label="Loading standings">
        <Spinner size="lg" />
      </div>
    )
  }

  if (isError) {
    return (
      <EmptyState
        title="Failed to load standings"
        description="Check your connection and try again."
        className={className}
      />
    )
  }

  if (!standings?.length) {
    return <EmptyState title="No standings available" className={className} />
  }

  return (
    <div className={cn('overflow-x-auto rounded-lg border border-gray-200', className)}>
      <table className="min-w-full" aria-label="League standings">
        <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
          <tr>
            <th className="py-2 px-3 text-center">#</th>
            <th className="py-2 px-3 text-left">Team</th>
            <th className="py-2 px-3 text-center">P</th>
            <th className="py-2 px-3 text-center">W</th>
            <th className="py-2 px-3 text-center">D</th>
            <th className="py-2 px-3 text-center">L</th>
            <th className="py-2 px-3 text-center">GD</th>
            <th className="py-2 px-3 text-center">Pts</th>
            <th className="py-2 px-3 text-left hidden md:table-cell">Form</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((s) => (
            <StandingRow key={s.team.id} standing={s} highlightTeamId={highlightTeamId} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
