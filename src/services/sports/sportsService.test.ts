import { describe, it, expect } from 'vitest'
import { getScores, getStandings, getMatchStats, getLeagues } from './sportsService'
import { mockScores } from '@/tests/mocks/data/scores.mock'
import { mockStandings } from '@/tests/mocks/data/standings.mock'
import { mockStats } from '@/tests/mocks/data/stats.mock'
import { mockLeagues } from '@/tests/mocks/data/leagues.mock'

describe('getScores', () => {
  it('returns list of matches', async () => {
    const result = await getScores()
    expect(result).toEqual(mockScores)
  })

  it('accepts optional filter params', async () => {
    const result = await getScores({ leagueId: 39 })
    expect(Array.isArray(result)).toBe(true)
  })
})

describe('getStandings', () => {
  it('returns list of standings', async () => {
    const result = await getStandings({ leagueId: 39, season: '2023/24' })
    expect(result).toEqual(mockStandings)
    expect(result[0].position).toBe(1)
  })
})

describe('getMatchStats', () => {
  it('returns stats for a known match', async () => {
    const result = await getMatchStats(1)
    expect(result).toEqual(mockStats)
    expect(result.home.possession + result.away.possession).toBe(100)
  })

  it('rejects with 404 for unknown match', async () => {
    await expect(getMatchStats(9999)).rejects.toMatchObject({ status: 404 })
  })
})

describe('getLeagues', () => {
  it('returns list of leagues', async () => {
    const result = await getLeagues()
    expect(result).toEqual(mockLeagues)
    expect(result.length).toBeGreaterThan(0)
  })
})
