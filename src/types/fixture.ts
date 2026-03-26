/**
 * Fixture-related TypeScript types for Manchester United Dashboard.
 */

import type { Competition } from './match'

export type Venue = 'HOME' | 'AWAY' | 'NEUTRAL'

export interface Fixture {
  id: string
  opponent: {
    id: number
    name: string
    shortName: string
    logo?: string
    primaryColor?: string
  }
  date: string
  kickoffTime: string
  venue: Venue
  stadium: string
  competition: Competition
  season: string
  round?: string
  broadcastChannel?: string
  ticketsAvailable?: boolean
}
