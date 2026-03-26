/**
 * Factory functions for generating Match test data.
 */

import type { Match, MatchState, MatchStatus, MatchStats, Competition } from '@/types'

let matchIdCounter = 1000

const defaultStats = (): MatchStats => ({
  possession: 50,
  shots: 10,
  shotsOnTarget: 4,
  corners: 5,
  fouls: 10,
  yellowCards: 1,
  redCards: 0,
  offsides: 2,
  passes: 450,
  passAccuracy: 83,
})

const MAN_UTD = {
  id: 33,
  name: 'Manchester United',
  shortName: 'MUN',
  primaryColor: '#DA291C',
}

const DEFAULT_OPPONENT = {
  id: 49,
  name: 'Chelsea',
  shortName: 'CHE',
  primaryColor: '#034694',
}

export interface CreateMatchOptions {
  id?: string
  homeTeamId?: number
  homeTeamName?: string
  awayTeamId?: number
  awayTeamName?: string
  homeScore?: number
  awayScore?: number
  status?: MatchState
  result?: MatchStatus
  date?: string
  competition?: Competition
  season?: string
  venue?: string
  isHome?: boolean
  includeStats?: boolean
}

export function createMatch(options: CreateMatchOptions = {}): Match {
  const id = options.id ?? `match-factory-${matchIdCounter++}`
  const isHome = options.isHome ?? true
  const homeScore = options.homeScore ?? 1
  const awayScore = options.awayScore ?? 0
  const status: MatchState = options.status ?? 'finished'

  let result: MatchStatus | undefined = options.result
  if (result === undefined && status === 'finished') {
    const manUtdScore = isHome ? homeScore : awayScore
    const opponentScore = isHome ? awayScore : homeScore
    if (manUtdScore > opponentScore) result = 'WIN'
    else if (manUtdScore < opponentScore) result = 'LOSS'
    else result = 'DRAW'
  }

  const homeTeam = isHome
    ? {
        ...MAN_UTD,
        id: options.homeTeamId ?? MAN_UTD.id,
        name: options.homeTeamName ?? MAN_UTD.name,
      }
    : {
        ...DEFAULT_OPPONENT,
        id: options.awayTeamId ?? DEFAULT_OPPONENT.id,
        name: options.awayTeamName ?? DEFAULT_OPPONENT.name,
      }

  const awayTeam = isHome
    ? {
        ...DEFAULT_OPPONENT,
        id: options.awayTeamId ?? DEFAULT_OPPONENT.id,
        name: options.awayTeamName ?? DEFAULT_OPPONENT.name,
      }
    : {
        ...MAN_UTD,
        id: options.homeTeamId ?? MAN_UTD.id,
        name: options.homeTeamName ?? MAN_UTD.name,
      }

  return {
    id,
    homeTeam,
    awayTeam,
    score: status !== 'scheduled' ? { home: homeScore, away: awayScore } : undefined,
    status,
    result,
    date: options.date ?? '2025-01-15T15:00:00Z',
    competition: options.competition ?? 'Premier League',
    season: options.season ?? '2024/25',
    venue: options.venue ?? (isHome ? 'Old Trafford' : 'Away Ground'),
    isHome,
    manUtdScore: isHome ? homeScore : awayScore,
    opponentScore: isHome ? awayScore : homeScore,
    stats: options.includeStats
      ? {
          home: defaultStats(),
          away: defaultStats(),
        }
      : undefined,
  }
}

export function createMatchList(n: number, options: CreateMatchOptions = {}): Match[] {
  return Array.from({ length: n }, (_, i) =>
    createMatch({
      ...options,
      id: options.id ? `${options.id}-${i}` : undefined,
      date: options.date ?? new Date(2025, 0, 15 + i).toISOString(),
    })
  )
}
