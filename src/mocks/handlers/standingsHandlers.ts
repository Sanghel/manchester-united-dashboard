/**
 * MSW handlers for standings-related API endpoints.
 */

import { http, HttpResponse } from 'msw'
import { mockStandings } from '../data/standings'

export const standingsHandlers = [
  http.get('/api/standings', () => {
    return HttpResponse.json({
      data: mockStandings,
      status: 200,
    })
  }),
]
