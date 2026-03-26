/**
 * Season-related TypeScript types for Manchester United Dashboard.
 */

export interface Season {
  id: string
  label: string
  startDate: string
  endDate: string
  leagueId: number
  leagueName: string
  isCurrent: boolean
}
