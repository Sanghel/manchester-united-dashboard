/**
 * Factory functions for generating Player test data.
 */

import type { Player, PlayerPosition, PlayerStats, PlayerForm } from '@/types'

let playerIdCounter = 1000

const POSITIONS: PlayerPosition[] = [
  'GK',
  'CB',
  'RB',
  'LB',
  'CDM',
  'CM',
  'CAM',
  'RW',
  'LW',
  'CF',
  'ST',
]

const defaultStats = (): PlayerStats => ({
  appearances: 20,
  goals: 5,
  assists: 3,
  yellowCards: 2,
  redCards: 0,
  minutesPlayed: 1600,
  rating: 7.0,
})

const defaultForm = (): PlayerForm => ({
  last5: ['W', 'W', 'D', 'W', 'L'],
  averageRating: 7.0,
})

export interface CreatePlayerOptions {
  id?: string
  name?: string
  firstName?: string
  lastName?: string
  number?: number
  position?: PlayerPosition
  nationality?: string
  age?: number
  height?: number
  weight?: number
  isInjured?: boolean
  isSuspended?: boolean
  stats?: Partial<PlayerStats>
  form?: PlayerForm
  marketValue?: number
}

export function createPlayer(options: CreatePlayerOptions = {}): Player {
  const id = options.id ?? `player-factory-${playerIdCounter++}`
  const firstName = options.firstName ?? 'Test'
  const lastName = options.lastName ?? 'Player'

  return {
    id,
    name: options.name ?? `${firstName} ${lastName}`,
    firstName,
    lastName,
    number: options.number ?? Math.floor(Math.random() * 99) + 1,
    position: options.position ?? 'CM',
    nationality: options.nationality ?? 'England',
    age: options.age ?? 25,
    height: options.height ?? 180,
    weight: options.weight ?? 75,
    isInjured: options.isInjured ?? false,
    isSuspended: options.isSuspended ?? false,
    marketValue: options.marketValue ?? 20000000,
    stats: { ...defaultStats(), ...options.stats },
    form: options.form ?? defaultForm(),
  }
}

export function createPlayerList(n: number, options: CreatePlayerOptions = {}): Player[] {
  return Array.from({ length: n }, (_, i) =>
    createPlayer({
      ...options,
      id: options.id ? `${options.id}-${i}` : undefined,
      name: options.name ? `${options.name} ${i + 1}` : undefined,
      number: options.number ? options.number + i : undefined,
      position: options.position ?? POSITIONS[i % POSITIONS.length],
    })
  )
}
