import { ScoreCard } from '@/components/ui/cards/ScoreCard'
import { Spinner } from '@/components/ui/feedback/Spinner'
import { EmptyState } from '@/components/ui/feedback/EmptyState'
import { useScores } from '@/hooks/sports'
import type { ScoresParams } from '@/services/sports'
import type { Match } from '@/services/sports'

function matchStatusToCardStatus(match: Match): 'live' | 'finished' | 'upcoming' | 'postponed' {
  if (match.status === 'live') return 'live'
  if (match.status === 'finished') return 'finished'
  if (match.status === 'cancelled' || match.status === 'postponed') return 'postponed'
  return 'upcoming'
}

export interface ScoreBoardProps {
  params?: ScoresParams
  onMatchClick?: (matchId: number) => void
  className?: string
}

export function ScoreBoard({ params, onMatchClick, className }: ScoreBoardProps) {
  const { data: matches, isLoading, isError } = useScores(params)

  if (isLoading) {
    return (
      <div className="flex justify-center py-12" aria-label="Loading scores">
        <Spinner size="lg" />
      </div>
    )
  }

  if (isError) {
    return (
      <EmptyState
        title="Failed to load scores"
        description="Check your connection and try again."
        className={className}
      />
    )
  }

  if (!matches?.length) {
    return (
      <EmptyState
        title="No matches found"
        description="There are no matches for the selected filters."
        className={className}
      />
    )
  }

  return (
    <section aria-label="Score board" className={className}>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <ScoreCard
            key={match.id}
            homeTeam={{
              name: match.homeTeam.name,
              abbreviation: match.homeTeam.shortName,
              logo: match.homeTeam.logo,
            }}
            awayTeam={{
              name: match.awayTeam.name,
              abbreviation: match.awayTeam.shortName,
              logo: match.awayTeam.logo,
            }}
            homeScore={match.homeScore}
            awayScore={match.awayScore}
            status={matchStatusToCardStatus(match)}
            time={match.minute !== undefined ? `${match.minute}'` : undefined}
            league={match.league.name}
            onClick={onMatchClick ? () => onMatchClick(match.id) : undefined}
          />
        ))}
      </div>
    </section>
  )
}
