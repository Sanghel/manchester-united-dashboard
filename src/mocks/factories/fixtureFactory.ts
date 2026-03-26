/**
 * Factory functions for generating Fixture test data.
 */

import type { Fixture, Venue, Competition } from '@/types'

let fixtureIdCounter = 1000

const DEFAULT_OPPONENT = {
  id: 40,
  name: 'Liverpool',
  shortName: 'LIV',
  primaryColor: '#C8102E',
}

export interface CreateFixtureOptions {
  id?: string
  opponentId?: number
  opponentName?: string
  opponentShortName?: string
  opponentColor?: string
  date?: string
  kickoffTime?: string
  venue?: Venue
  stadium?: string
  competition?: Competition
  season?: string
  round?: string
  broadcastChannel?: string
  ticketsAvailable?: boolean
}

export function createFixture(options: CreateFixtureOptions = {}): Fixture {
  const id = options.id ?? `fixture-factory-${fixtureIdCounter++}`
  const venue: Venue = options.venue ?? 'HOME'

  const opponent = {
    id: options.opponentId ?? DEFAULT_OPPONENT.id,
    name: options.opponentName ?? DEFAULT_OPPONENT.name,
    shortName: options.opponentShortName ?? DEFAULT_OPPONENT.shortName,
    primaryColor: options.opponentColor ?? DEFAULT_OPPONENT.primaryColor,
  }

  return {
    id,
    opponent,
    date: options.date ?? '2025-04-01',
    kickoffTime: options.kickoffTime ?? '15:00',
    venue,
    stadium: options.stadium ?? (venue === 'HOME' ? 'Old Trafford' : `${opponent.name} Stadium`),
    competition: options.competition ?? 'Premier League',
    season: options.season ?? '2024/25',
    round: options.round ?? 'Matchday 30',
    broadcastChannel: options.broadcastChannel ?? 'Sky Sports',
    ticketsAvailable: options.ticketsAvailable ?? true,
  }
}

export function createFixtureList(n: number, options: CreateFixtureOptions = {}): Fixture[] {
  return Array.from({ length: n }, (_, i) => {
    const baseDate = options.date ? new Date(options.date) : new Date('2025-04-01')
    baseDate.setDate(baseDate.getDate() + i * 7)
    return createFixture({
      ...options,
      id: options.id ? `${options.id}-${i}` : undefined,
      date: baseDate.toISOString().split('T')[0],
      venue: options.venue ?? (i % 2 === 0 ? 'HOME' : 'AWAY'),
    })
  })
}
