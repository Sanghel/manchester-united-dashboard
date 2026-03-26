/**
 * Player-related TypeScript types for Manchester United Dashboard.
 */

export type PlayerPosition =
  | 'GK'
  | 'CB'
  | 'RB'
  | 'LB'
  | 'CDM'
  | 'CM'
  | 'CAM'
  | 'RW'
  | 'LW'
  | 'CF'
  | 'ST'

export type FormResult = 'W' | 'L' | 'D'

export type Nationality =
  | 'England'
  | 'Portugal'
  | 'Brazil'
  | 'France'
  | 'Denmark'
  | 'Norway'
  | 'Cameroon'
  | 'Sweden'
  | 'Netherlands'
  | 'Argentina'
  | 'Spain'
  | 'Serbia'
  | string

export interface PlayerStats {
  appearances: number
  goals: number
  assists: number
  yellowCards: number
  redCards: number
  minutesPlayed: number
  passAccuracy?: number
  shotsOnTarget?: number
  cleanSheets?: number
  tackles?: number
  interceptions?: number
  rating?: number
}

export interface PlayerForm {
  last5: FormResult[]
  averageRating: number
}

export interface Player {
  id: string
  name: string
  firstName: string
  lastName: string
  number: number
  position: PlayerPosition
  nationality: Nationality
  age: number
  height: number
  weight: number
  photo?: string
  stats: PlayerStats
  form?: PlayerForm
  isInjured: boolean
  isSuspended: boolean
  marketValue?: number
}
