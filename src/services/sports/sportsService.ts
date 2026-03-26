import { apiClient } from '../api'
import type { ApiResponse, PaginatedResponse } from '../api'
import type { Match, Standing, GameStats, League, ScoresParams, StandingsParams } from './types'

export async function getScores(params?: ScoresParams): Promise<Match[]> {
  const { data } = await apiClient.get<ApiResponse<Match[]>>('/sports/scores', { params })
  return data.data
}

export async function getStandings(params: StandingsParams): Promise<Standing[]> {
  const { data } = await apiClient.get<ApiResponse<Standing[]>>('/sports/standings', { params })
  return data.data
}

export async function getMatchStats(matchId: number): Promise<GameStats> {
  const { data } = await apiClient.get<ApiResponse<GameStats>>(`/sports/stats/${matchId}`)
  return data.data
}

export async function getLeagues(): Promise<League[]> {
  const { data } = await apiClient.get<PaginatedResponse<League>>('/sports/leagues')
  return data.data
}
