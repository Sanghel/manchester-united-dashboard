import type { AxiosResponse, AxiosError } from 'axios'
import { apiClient } from '../client'
import type { ApiError } from '../types'

/**
 * Response interceptor — normalizes errors into a consistent ApiError shape.
 */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<{ message?: string; code?: string }>) => {
    const apiError: ApiError = {
      status: error.response?.status ?? 0,
      message: error.response?.data?.message ?? error.message ?? 'An unexpected error occurred',
      code: error.response?.data?.code ?? error.code,
    }
    return Promise.reject(apiError)
  }
)
