import { type MouseEventHandler } from 'react'
import { cn } from '@/lib/utils'
import { Card } from '../Card'

export type GameStatus = 'live' | 'finished' | 'upcoming' | 'postponed'

export interface TeamInfo {
  name: string
  abbreviation?: string
  logo?: string
}

export interface ScoreCardProps {
  /** Home team info */
  homeTeam: TeamInfo
  /** Away team info */
  awayTeam: TeamInfo
  /** Home team score */
  homeScore?: number
  /** Away team score */
  awayScore?: number
  /** Game status */
  status: GameStatus
  /** Game time or clock */
  time?: string
  /** League name */
  league?: string
  /** Click handler */
  onClick?: MouseEventHandler<HTMLDivElement>
  /** Additional className */
  className?: string
}

const statusConfig: Record<GameStatus, { label: string; className: string }> = {
  live: { label: 'LIVE', className: 'bg-red-100 text-red-700 animate-pulse' },
  finished: { label: 'FT', className: 'bg-gray-100 text-gray-600' },
  upcoming: { label: 'Upcoming', className: 'bg-blue-100 text-blue-700' },
  postponed: { label: 'PPD', className: 'bg-yellow-100 text-yellow-700' },
}

/**
 * Score card displaying a matchup between two teams.
 *
 * @example
 * ```tsx
 * <ScoreCard
 *   homeTeam={{ name: 'Los Angeles Lakers', abbreviation: 'LAL' }}
 *   awayTeam={{ name: 'Golden State Warriors', abbreviation: 'GSW' }}
 *   homeScore={98}
 *   awayScore={102}
 *   status="live"
 *   time="Q3 4:22"
 *   league="NBA"
 * />
 * ```
 */
export function ScoreCard({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  time,
  league,
  onClick,
  className,
}: ScoreCardProps) {
  const { label, className: statusClass } = statusConfig[status]
  const isLive = status === 'live'
  const hasScore = homeScore !== undefined && awayScore !== undefined

  return (
    <Card
      variant={onClick ? 'interactive' : 'default'}
      className={cn('p-4', className)}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        {league && <span className="text-xs font-medium text-gray-500 uppercase">{league}</span>}
        <span
          className={cn('ml-auto text-xs font-semibold px-2 py-0.5 rounded-full', statusClass)}
          aria-label={`Game status: ${label}`}
        >
          {label}
        </span>
      </div>

      {/* Teams and scores */}
      <div className="space-y-2">
        <TeamRow
          team={homeTeam}
          score={homeScore}
          isWinner={hasScore && homeScore! > awayScore!}
          showScore={hasScore}
        />
        <TeamRow
          team={awayTeam}
          score={awayScore}
          isWinner={hasScore && awayScore! > homeScore!}
          showScore={hasScore}
        />
      </div>

      {/* Time */}
      {(time || isLive) && <p className="mt-3 text-xs text-gray-500 text-center">{time ?? ''}</p>}
    </Card>
  )
}

function TeamRow({
  team,
  score,
  isWinner,
  showScore,
}: {
  team: TeamInfo
  score?: number
  isWinner: boolean
  showScore: boolean
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 min-w-0">
        {team.logo ? (
          <img src={team.logo} alt={`${team.name} logo`} className="w-6 h-6 object-contain" />
        ) : (
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
            {(team.abbreviation ?? team.name).slice(0, 2).toUpperCase()}
          </div>
        )}
        <span
          className={cn('text-sm truncate', isWinner ? 'font-bold text-gray-900' : 'text-gray-700')}
        >
          {team.abbreviation ?? team.name}
        </span>
      </div>
      {showScore && (
        <span
          className={cn(
            'text-lg font-bold tabular-nums',
            isWinner ? 'text-gray-900' : 'text-gray-500'
          )}
        >
          {score}
        </span>
      )}
    </div>
  )
}
