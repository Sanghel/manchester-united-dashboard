/**
 * MSW server setup for unit and integration tests.
 * Uses Node.js HTTP interceptors (not Service Worker).
 */

import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
