/**
 * Sports domain types shared across services and hooks.
 */

export type MatchStatus = 'scheduled' | 'live' | 'finished' | 'postponed' | 'cancelled'

export interface Team {
  id: number
  name: string
  shortName: string
  logo?: string
  primaryColor?: string
}

export interface League {
  id: number
  name: string
  country: string
  season: string
  logo?: string
  teamCount?: number
}

export interface Match {
  id: number
  homeTeam: Team
  awayTeam: Team
  homeScore?: number
  awayScore?: number
  status: MatchStatus
  minute?: number
  date: string
  league: League
}

export interface Standing {
  position: number
  team: Team
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
  form?: string[]
}

export interface GameStats {
  matchId: number
  home: TeamGameStats
  away: TeamGameStats
}

export interface TeamGameStats {
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

export interface ScoresParams {
  leagueId?: number
  date?: string
  status?: MatchStatus
}

export interface StandingsParams {
  leagueId: number
  season: string
}
