/**
 * MSW browser setup using Service Worker.
 * Used in development to intercept API requests in the browser.
 */

import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
