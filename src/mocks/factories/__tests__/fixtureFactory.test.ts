import { describe, it, expect } from 'vitest'
import { createFixture, createFixtureList } from '../fixtureFactory'

describe('fixtureFactory', () => {
  describe('createFixture', () => {
    it('creates a fixture with default values', () => {
      const fixture = createFixture()

      expect(fixture.id).toMatch(/^fixture-factory-/)
      expect(fixture.opponent.name).toBe('Liverpool')
      expect(fixture.venue).toBe('HOME')
      expect(fixture.stadium).toBe('Old Trafford')
      expect(fixture.competition).toBe('Premier League')
      expect(fixture.season).toBe('2024/25')
      expect(fixture.date).toBe('2025-04-01')
      expect(fixture.kickoffTime).toBe('15:00')
    })

    it('creates a home fixture at Old Trafford', () => {
      const fixture = createFixture({ venue: 'HOME' })

      expect(fixture.venue).toBe('HOME')
      expect(fixture.stadium).toBe('Old Trafford')
    })

    it('creates an away fixture at opponent stadium', () => {
      const fixture = createFixture({ venue: 'AWAY', opponentName: 'Arsenal' })

      expect(fixture.venue).toBe('AWAY')
      expect(fixture.stadium).toBe('Arsenal Stadium')
    })

    it('creates a Champions League fixture', () => {
      const fixture = createFixture({ competition: 'Champions League', round: 'Quarter-Final' })

      expect(fixture.competition).toBe('Champions League')
      expect(fixture.round).toBe('Quarter-Final')
    })

    it('creates a fixture with custom opponent', () => {
      const fixture = createFixture({
        opponentId: 42,
        opponentName: 'Arsenal',
        opponentShortName: 'ARS',
        opponentColor: '#EF0107',
      })

      expect(fixture.opponent.id).toBe(42)
      expect(fixture.opponent.name).toBe('Arsenal')
      expect(fixture.opponent.shortName).toBe('ARS')
      expect(fixture.opponent.primaryColor).toBe('#EF0107')
    })

    it('creates a fixture with tickets available', () => {
      const fixture = createFixture({ ticketsAvailable: true })

      expect(fixture.ticketsAvailable).toBe(true)
    })

    it('creates a fixture with broadcast channel', () => {
      const fixture = createFixture({ broadcastChannel: 'BBC One' })

      expect(fixture.broadcastChannel).toBe('BBC One')
    })

    it('uses custom id when provided', () => {
      const fixture = createFixture({ id: 'fixture-custom-001' })

      expect(fixture.id).toBe('fixture-custom-001')
    })

    it('creates a fixture with custom date and kickoff time', () => {
      const fixture = createFixture({ date: '2025-05-10', kickoffTime: '20:00' })

      expect(fixture.date).toBe('2025-05-10')
      expect(fixture.kickoffTime).toBe('20:00')
    })
  })

  describe('createFixtureList', () => {
    it('creates a list of n fixtures', () => {
      const fixtures = createFixtureList(5)

      expect(fixtures).toHaveLength(5)
    })

    it('creates fixtures with unique ids', () => {
      const fixtures = createFixtureList(5)
      const ids = fixtures.map((f) => f.id)

      expect(new Set(ids).size).toBe(5)
    })

    it('creates fixtures with incrementing dates (7 days apart)', () => {
      const fixtures = createFixtureList(3, { date: '2025-04-01' })

      expect(fixtures[0].date).toBe('2025-04-01')
      expect(fixtures[1].date).toBe('2025-04-08')
      expect(fixtures[2].date).toBe('2025-04-15')
    })

    it('alternates home/away venues', () => {
      const fixtures = createFixtureList(4)

      expect(fixtures[0].venue).toBe('HOME')
      expect(fixtures[1].venue).toBe('AWAY')
      expect(fixtures[2].venue).toBe('HOME')
      expect(fixtures[3].venue).toBe('AWAY')
    })

    it('creates an empty list when n is 0', () => {
      const fixtures = createFixtureList(0)

      expect(fixtures).toHaveLength(0)
    })

    it('applies options to all fixtures', () => {
      const fixtures = createFixtureList(3, { competition: 'FA Cup', season: '2024/25' })

      fixtures.forEach((fixture) => {
        expect(fixture.competition).toBe('FA Cup')
        expect(fixture.season).toBe('2024/25')
      })
    })
  })
})
