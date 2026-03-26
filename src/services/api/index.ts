export { apiClient } from './client'
export type { ApiResponse, PaginatedResponse, ApiError, PaginationParams, SortOrder } from './types'

// Register interceptors
import './interceptors'
