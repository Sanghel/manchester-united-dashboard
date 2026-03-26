/**
 * Team-related TypeScript types for Manchester United Dashboard.
 */

export interface TeamStats {
  teamId: number
  season: string
  leagueId: number
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
  cleanSheets: number
  failedToScore: number
  averagePossession: number
  averageShots: number
  averageShotsOnTarget: number
  averagePasses: number
  averagePassAccuracy: number
  averageCorners: number
  averageFouls: number
  yellowCards: number
  redCards: number
  topScorer: string
  topAssist: string
  homeRecord: { won: number; drawn: number; lost: number }
  awayRecord: { won: number; drawn: number; lost: number }
}

export interface Team {
  id: number
  name: string
  shortName: string
  nickname: string
  founded: number
  stadium: string
  stadiumCapacity: number
  city: string
  country: string
  logo?: string
  primaryColor: string
  secondaryColor: string
  manager: string
}
