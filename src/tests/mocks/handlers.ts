import { http, HttpResponse } from 'msw'

/**
 * Base MSW request handlers.
 * Add feature-specific handlers as features are implemented.
 */
export const handlers = [
  http.get('/api/health', () => {
    return HttpResponse.json({ status: 'ok' })
  }),
]
