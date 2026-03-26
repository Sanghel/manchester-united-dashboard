/**
 * Standings-related TypeScript types for Manchester United Dashboard.
 */

import type { FormResult } from './player'

export interface StandingsEntry {
  position: number
  team: {
    id: number
    name: string
    shortName: string
    logo?: string
    primaryColor?: string
  }
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
  form: FormResult[]
}

export interface LeagueTable {
  leagueId: number
  leagueName: string
  season: string
  entries: StandingsEntry[]
  updatedAt: string
}
