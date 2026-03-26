import { useState, useMemo, useCallback } from 'react'

export interface PaginationState {
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  startIndex: number
  endIndex: number
  goToPage: (page: number) => void
  nextPage: () => void
  previousPage: () => void
  setPageSize: (size: number) => void
}

export interface UsePaginationOptions {
  totalItems: number
  initialPage?: number
  initialPageSize?: number
}

/**
 * Manages pagination state with navigation helpers.
 *
 * @example
 * ```ts
 * const { currentPage, totalPages, nextPage, previousPage } = usePagination({
 *   totalItems: 100,
 *   initialPageSize: 10,
 * })
 * ```
 */
export function usePagination({
  totalItems,
  initialPage = 1,
  initialPageSize = 10,
}: UsePaginationOptions): PaginationState {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [pageSize, setPageSizeState] = useState(initialPageSize)

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalItems / pageSize)),
    [totalItems, pageSize]
  )

  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(Math.min(Math.max(1, page), totalPages))
    },
    [totalPages]
  )

  const nextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage])
  const previousPage = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage])

  const setPageSize = useCallback((size: number) => {
    setPageSizeState(size)
    setCurrentPage(1)
  }, [])

  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

  return {
    currentPage,
    totalPages,
    pageSize,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
    startIndex,
    endIndex,
    goToPage,
    nextPage,
    previousPage,
    setPageSize,
  }
}
