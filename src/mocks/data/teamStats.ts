/**
 * Manchester United aggregate season stats for 2024/25.
 */

import type { TeamStats, Team } from '@/types'

export const manUtdTeam: Team = {
  id: 33,
  name: 'Manchester United',
  shortName: 'MUN',
  nickname: 'The Red Devils',
  founded: 1878,
  stadium: 'Old Trafford',
  stadiumCapacity: 74310,
  city: 'Manchester',
  country: 'England',
  primaryColor: '#DA291C',
  secondaryColor: '#FBE122',
  manager: 'Ruben Amorim',
}

export const mockTeamStats: TeamStats = {
  teamId: 33,
  season: '2024/25',
  leagueId: 39,
  played: 28,
  won: 13,
  drawn: 5,
  lost: 10,
  goalsFor: 44,
  goalsAgainst: 40,
  goalDifference: 4,
  points: 44,
  cleanSheets: 10,
  failedToScore: 5,
  averagePossession: 52,
  averageShots: 13.4,
  averageShotsOnTarget: 5.2,
  averagePasses: 502,
  averagePassAccuracy: 84,
  averageCorners: 5.8,
  averageFouls: 10.6,
  yellowCards: 42,
  redCards: 1,
  topScorer: 'Bruno Fernandes',
  topAssist: 'Bruno Fernandes',
  homeRecord: { won: 8, drawn: 3, lost: 3 },
  awayRecord: { won: 5, drawn: 2, lost: 7 },
}
