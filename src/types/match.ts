/**
 * Match-related TypeScript types for Manchester United Dashboard.
 */

export type MatchStatus = 'WIN' | 'LOSS' | 'DRAW'

export type MatchState = 'scheduled' | 'live' | 'finished' | 'postponed' | 'cancelled'

export type Competition =
  | 'Premier League'
  | 'Champions League'
  | 'FA Cup'
  | 'League Cup'
  | 'Europa League'

export interface Score {
  home: number
  away: number
}

export interface MatchStats {
  possession: number
  shots: number
  shotsOnTarget: number
  corners: number
  fouls: number
  yellowCards: number
  redCards: number
  offsides: number
  passes: number
  passAccuracy: number
}

export interface MatchTeamStats {
  home: MatchStats
  away: MatchStats
}

export interface Match {
  id: string
  homeTeam: {
    id: number
    name: string
    shortName: string
    logo?: string
    primaryColor?: string
  }
  awayTeam: {
    id: number
    name: string
    shortName: string
    logo?: string
    primaryColor?: string
  }
  score?: Score
  status: MatchState
  result?: MatchStatus
  minute?: number
  date: string
  competition: Competition
  season: string
  venue: string
  stats?: MatchTeamStats
  manUtdScore?: number
  opponentScore?: number
  isHome: boolean
}
