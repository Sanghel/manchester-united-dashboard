/**
 * MSW handlers for player-related API endpoints.
 */

import { http, HttpResponse } from 'msw'
import { mockPlayers } from '../data/players'

export const playerHandlers = [
  http.get('/api/players', () => {
    return HttpResponse.json({
      data: mockPlayers,
      total: mockPlayers.length,
      status: 200,
    })
  }),

  http.get('/api/players/:id', ({ params }) => {
    const player = mockPlayers.find((p) => p.id === params.id)
    if (!player) {
      return HttpResponse.json({ status: 404, message: 'Player not found' }, { status: 404 })
    }
    return HttpResponse.json({ data: player, status: 200 })
  }),
]
