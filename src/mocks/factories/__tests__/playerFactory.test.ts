import { describe, it, expect } from 'vitest'
import { createPlayer, createPlayerList } from '../playerFactory'
import type { FormResult } from '@/types/player'

describe('playerFactory', () => {
  describe('createPlayer', () => {
    it('creates a player with default values', () => {
      const player = createPlayer()

      expect(player.id).toMatch(/^player-factory-/)
      expect(player.firstName).toBe('Test')
      expect(player.lastName).toBe('Player')
      expect(player.name).toBe('Test Player')
      expect(player.position).toBe('CM')
      expect(player.nationality).toBe('England')
      expect(player.age).toBe(25)
      expect(player.isInjured).toBe(false)
      expect(player.isSuspended).toBe(false)
    })

    it('creates a player with custom firstName and lastName', () => {
      const player = createPlayer({ firstName: 'Bruno', lastName: 'Fernandes' })

      expect(player.firstName).toBe('Bruno')
      expect(player.lastName).toBe('Fernandes')
      expect(player.name).toBe('Bruno Fernandes')
    })

    it('uses explicit name over firstName/lastName concatenation', () => {
      const player = createPlayer({
        name: 'B. Fernandes',
        firstName: 'Bruno',
        lastName: 'Fernandes',
      })

      expect(player.name).toBe('B. Fernandes')
      expect(player.firstName).toBe('Bruno')
      expect(player.lastName).toBe('Fernandes')
    })

    it('creates a goalkeeper with correct position', () => {
      const player = createPlayer({ position: 'GK' })

      expect(player.position).toBe('GK')
    })

    it('creates an injured player', () => {
      const player = createPlayer({ isInjured: true })

      expect(player.isInjured).toBe(true)
    })

    it('creates a suspended player', () => {
      const player = createPlayer({ isSuspended: true })

      expect(player.isSuspended).toBe(true)
    })

    it('creates a player with custom stats', () => {
      const player = createPlayer({ stats: { goals: 15, assists: 10 } })

      expect(player.stats.goals).toBe(15)
      expect(player.stats.assists).toBe(10)
      expect(player.stats.appearances).toBe(20)
    })

    it('creates a player with correct default stats', () => {
      const player = createPlayer()

      expect(player.stats.appearances).toBe(20)
      expect(player.stats.goals).toBe(5)
      expect(player.stats.assists).toBe(3)
      expect(player.stats.yellowCards).toBe(2)
      expect(player.stats.redCards).toBe(0)
    })

    it('creates a player with custom form', () => {
      const form = { last5: ['W', 'W', 'W', 'W', 'W'] as FormResult[], averageRating: 8.5 }
      const player = createPlayer({ form })

      expect(player.form).toEqual(form)
      expect(player.form?.averageRating).toBe(8.5)
    })

    it('uses custom id when provided', () => {
      const player = createPlayer({ id: 'player-custom-001' })

      expect(player.id).toBe('player-custom-001')
    })

    it('creates a player with custom market value', () => {
      const player = createPlayer({ marketValue: 100000000 })

      expect(player.marketValue).toBe(100000000)
    })
  })

  describe('createPlayerList', () => {
    it('creates a list of n players', () => {
      const players = createPlayerList(5)

      expect(players).toHaveLength(5)
    })

    it('creates players with unique ids', () => {
      const players = createPlayerList(5)
      const ids = players.map((p) => p.id)

      expect(new Set(ids).size).toBe(5)
    })

    it('cycles through positions', () => {
      const players = createPlayerList(11)
      const positions = players.map((p) => p.position)

      expect(positions[0]).toBe('GK')
      expect(positions[1]).toBe('CB')
      expect(positions[10]).toBe('ST')
    })

    it('creates an empty list when n is 0', () => {
      const players = createPlayerList(0)

      expect(players).toHaveLength(0)
    })

    it('applies options to all players', () => {
      const players = createPlayerList(3, { nationality: 'Portugal', isInjured: false })

      players.forEach((player) => {
        expect(player.nationality).toBe('Portugal')
        expect(player.isInjured).toBe(false)
      })
    })
  })
})
