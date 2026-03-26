import { http, HttpResponse } from 'msw'
import { mockScores } from './data/scores.mock'
import { mockStandings } from './data/standings.mock'
import { mockStats } from './data/stats.mock'
import { mockLeagues } from './data/leagues.mock'

export const handlers = [
  http.get('/api/health', () => {
    return HttpResponse.json({ status: 'ok' })
  }),

  http.get('/api/sports/scores', () => {
    return HttpResponse.json({ data: mockScores, status: 200 })
  }),

  http.get('/api/sports/standings', () => {
    return HttpResponse.json({ data: mockStandings, status: 200 })
  }),

  http.get('/api/sports/stats/:matchId', ({ params }) => {
    const matchId = Number(params.matchId)
    if (matchId !== mockStats.matchId) {
      return HttpResponse.json({ status: 404, message: 'Match not found' }, { status: 404 })
    }
    return HttpResponse.json({ data: mockStats, status: 200 })
  }),

  http.get('/api/sports/leagues', () => {
    return HttpResponse.json({
      data: mockLeagues,
      total: mockLeagues.length,
      page: 1,
      pageSize: 10,
      totalPages: 1,
    })
  }),
]
