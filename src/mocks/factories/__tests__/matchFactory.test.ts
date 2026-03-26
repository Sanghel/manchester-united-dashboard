import { describe, it, expect } from 'vitest'
import { createMatch, createMatchList } from '../matchFactory'

describe('matchFactory', () => {
  describe('createMatch', () => {
    it('creates a match with default values', () => {
      const match = createMatch()

      expect(match.id).toMatch(/^match-factory-/)
      expect(match.homeTeam.name).toBe('Manchester United')
      expect(match.awayTeam.name).toBe('Chelsea')
      expect(match.status).toBe('finished')
      expect(match.competition).toBe('Premier League')
      expect(match.season).toBe('2024/25')
      expect(match.isHome).toBe(true)
    })

    it('creates a home match with score and WIN result', () => {
      const match = createMatch({ homeScore: 3, awayScore: 0, isHome: true })

      expect(match.score).toEqual({ home: 3, away: 0 })
      expect(match.result).toBe('WIN')
      expect(match.manUtdScore).toBe(3)
      expect(match.opponentScore).toBe(0)
    })

    it('creates an away match with LOSS result', () => {
      const match = createMatch({ homeScore: 2, awayScore: 1, isHome: false })

      expect(match.homeTeam.name).toBe('Chelsea')
      expect(match.awayTeam.name).toBe('Manchester United')
      expect(match.result).toBe('LOSS')
      expect(match.manUtdScore).toBe(1)
      expect(match.opponentScore).toBe(2)
    })

    it('creates a DRAW match', () => {
      const match = createMatch({ homeScore: 1, awayScore: 1 })

      expect(match.result).toBe('DRAW')
    })

    it('creates a scheduled match without score', () => {
      const match = createMatch({ status: 'scheduled' })

      expect(match.score).toBeUndefined()
      expect(match.result).toBeUndefined()
    })

    it('creates a match with custom competition', () => {
      const match = createMatch({ competition: 'Champions League' })

      expect(match.competition).toBe('Champions League')
    })

    it('creates a match with stats when includeStats is true', () => {
      const match = createMatch({ includeStats: true })

      expect(match.stats).toBeDefined()
      expect(match.stats?.home).toBeDefined()
      expect(match.stats?.away).toBeDefined()
      expect(match.stats?.home.possession).toBe(50)
    })

    it('creates a match without stats by default', () => {
      const match = createMatch()

      expect(match.stats).toBeUndefined()
    })

    it('uses custom id when provided', () => {
      const match = createMatch({ id: 'custom-id-123' })

      expect(match.id).toBe('custom-id-123')
    })
  })

  describe('createMatchList', () => {
    it('creates a list of n matches', () => {
      const matches = createMatchList(5)

      expect(matches).toHaveLength(5)
    })

    it('creates matches with unique ids', () => {
      const matches = createMatchList(3)
      const ids = matches.map((m) => m.id)

      expect(new Set(ids).size).toBe(3)
    })

    it('creates matches with unique dates', () => {
      const matches = createMatchList(3)
      const dates = matches.map((m) => m.date)

      expect(new Set(dates).size).toBe(3)
    })

    it('creates an empty list when n is 0', () => {
      const matches = createMatchList(0)

      expect(matches).toHaveLength(0)
    })

    it('applies options to all matches', () => {
      const matches = createMatchList(3, { competition: 'FA Cup', season: '2024/25' })

      matches.forEach((match) => {
        expect(match.competition).toBe('FA Cup')
        expect(match.season).toBe('2024/25')
      })
    })
  })
})
