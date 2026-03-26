import type { InternalAxiosRequestConfig } from 'axios'
import { apiClient } from '../client'

/**
 * Request interceptor — attaches the API key header when configured.
 */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const apiKey = import.meta.env.VITE_API_KEY
    if (apiKey && apiKey !== 'your_api_key_here') {
      config.headers['X-API-Key'] = apiKey
    }
    return config
  },
  (error) => Promise.reject(error)
)
