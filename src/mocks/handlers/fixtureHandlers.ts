/**
 * MSW handlers for fixture-related API endpoints.
 */

import { http, HttpResponse } from 'msw'
import { mockFixtures } from '../data/fixtures'

export const fixtureHandlers = [
  http.get('/api/fixtures', () => {
    return HttpResponse.json({
      data: mockFixtures,
      total: mockFixtures.length,
      status: 200,
    })
  }),
]
