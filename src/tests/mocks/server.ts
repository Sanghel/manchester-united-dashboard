import { setupServer } from 'msw/node'
import { handlers } from './handlers'

/**
 * MSW server for unit and integration tests.
 * Uses Node.js HTTP interceptors (not Service Worker).
 */
export const server = setupServer(...handlers)
