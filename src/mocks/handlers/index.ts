/**
 * Combined MSW handlers for all API endpoints.
 */

import { matchHandlers } from './matchHandlers'
import { playerHandlers } from './playerHandlers'
import { standingsHandlers } from './standingsHandlers'
import { fixtureHandlers } from './fixtureHandlers'

export const handlers = [
  ...matchHandlers,
  ...playerHandlers,
  ...standingsHandlers,
  ...fixtureHandlers,
]

export { matchHandlers, playerHandlers, standingsHandlers, fixtureHandlers }
