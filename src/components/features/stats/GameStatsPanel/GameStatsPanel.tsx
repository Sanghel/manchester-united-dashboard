import { cn } from '@/lib/utils'
import { Spinner } from '@/components/ui/feedback/Spinner'
import { EmptyState } from '@/components/ui/feedback/EmptyState'
import { useMatchStats } from '@/hooks/sports'
import type { TeamGameStats } from '@/services/sports'

interface StatRowProps {
  label: string
  home: number
  away: number
  unit?: string
}

function StatRow({ label, home, away, unit = '' }: StatRowProps) {
  const total = home + away || 1
  const homeWidth = Math.round((home / total) * 100)
  const awayWidth = 100 - homeWidth

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs font-medium text-gray-700">
        <span>
          {home}
          {unit}
        </span>
        <span className="text-gray-500">{label}</span>
        <span>
          {away}
          {unit}
        </span>
      </div>
      <div className="flex h-1.5 rounded-full overflow-hidden bg-gray-100">
        <div
          className="bg-red-600 rounded-l-full"
          style={{ width: `${homeWidth}%` }}
          aria-hidden="true"
        />
        <div
          className="bg-blue-500 rounded-r-full"
          style={{ width: `${awayWidth}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

function buildRows(home: TeamGameStats, away: TeamGameStats) {
  return [
    { label: 'Possession', home: home.possession, away: away.possession, unit: '%' },
    { label: 'Shots', home: home.shots, away: away.shots },
    { label: 'Shots on Target', home: home.shotsOnTarget, away: away.shotsOnTarget },
    { label: 'Corners', home: home.corners, away: away.corners },
    { label: 'Fouls', home: home.fouls, away: away.fouls },
    { label: 'Yellow Cards', home: home.yellowCards, away: away.yellowCards },
    { label: 'Passes', home: home.passes, away: away.passes },
    { label: 'Pass Accuracy', home: home.passAccuracy, away: away.passAccuracy, unit: '%' },
  ]
}

export interface GameStatsPanelProps {
  matchId: number
  homeTeamName?: string
  awayTeamName?: string
  className?: string
}

export function GameStatsPanel({
  matchId,
  homeTeamName = 'Home',
  awayTeamName = 'Away',
  className,
}: GameStatsPanelProps) {
  const { data: stats, isLoading, isError } = useMatchStats(matchId)

  if (isLoading) {
    return (
      <div className="flex justify-center py-12" aria-label="Loading match stats">
        <Spinner size="lg" />
      </div>
    )
  }

  if (isError || !stats) {
    return (
      <EmptyState
        title="Stats not available"
        description="Statistics for this match could not be loaded."
        className={className}
      />
    )
  }

  const rows = buildRows(stats.home, stats.away)

  return (
    <section aria-label="Match statistics" className={cn('space-y-4', className)}>
      {/* Team header */}
      <div className="flex justify-between text-sm font-semibold text-gray-800">
        <span>{homeTeamName}</span>
        <span className="text-gray-500 text-xs uppercase tracking-wide">Stats</span>
        <span>{awayTeamName}</span>
      </div>

      {/* Stat rows */}
      <div className="space-y-3">
        {rows.map((row) => (
          <StatRow key={row.label} {...row} />
        ))}
      </div>
    </section>
  )
}
