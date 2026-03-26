/**
 * Core API types shared across services.
 */

export interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface ApiError {
  status: number
  message: string
  code?: string
}

export type SortOrder = 'asc' | 'desc'

export interface PaginationParams {
  page?: number
  pageSize?: number
}
