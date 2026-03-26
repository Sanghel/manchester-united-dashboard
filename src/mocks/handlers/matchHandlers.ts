/**
 * MSW handlers for match-related API endpoints.
 */

import { http, HttpResponse } from 'msw'
import { mockMatches } from '../data/matches'

export const matchHandlers = [
  http.get('/api/matches', () => {
    return HttpResponse.json({
      data: mockMatches,
      total: mockMatches.length,
      status: 200,
    })
  }),

  http.get('/api/matches/:id', ({ params }) => {
    const match = mockMatches.find((m) => m.id === params.id)
    if (!match) {
      return HttpResponse.json({ status: 404, message: 'Match not found' }, { status: 404 })
    }
    return HttpResponse.json({ data: match, status: 200 })
  }),
]
