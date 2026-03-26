import axios from 'axios'

/**
 * Configured Axios instance for all API calls.
 * Base URL and timeout are pulled from Vite env vars.
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
  timeout: Number(import.meta.env.VITE_API_TIMEOUT ?? 15000),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
