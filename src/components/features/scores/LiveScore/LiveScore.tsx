import { ScoreBoard } from '../ScoreBoard'

export interface LiveScoreProps {
  leagueId?: number
  onMatchClick?: (matchId: number) => void
  className?: string
}

/**
 * Displays only live matches; built on ScoreBoard with status='live' filter.
 * Inherits the 30s staleTime from QueryClient for near-real-time updates.
 */
export function LiveScore({ leagueId, onMatchClick, className }: LiveScoreProps) {
  return (
    <ScoreBoard
      params={{ status: 'live', leagueId }}
      onMatchClick={onMatchClick}
      className={className}
    />
  )
}
