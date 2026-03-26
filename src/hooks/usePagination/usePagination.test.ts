import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { usePagination } from './usePagination'

describe('usePagination', () => {
  it('starts on page 1 by default', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 100 }))
    expect(result.current.currentPage).toBe(1)
  })

  it('computes totalPages correctly', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 100, initialPageSize: 10 }))
    expect(result.current.totalPages).toBe(10)
  })

  it('hasNextPage is true when not on last page', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 100, initialPageSize: 10 }))
    expect(result.current.hasNextPage).toBe(true)
  })

  it('hasPreviousPage is false on first page', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 100 }))
    expect(result.current.hasPreviousPage).toBe(false)
  })

  it('nextPage increments currentPage', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 100, initialPageSize: 10 }))
    act(() => result.current.nextPage())
    expect(result.current.currentPage).toBe(2)
  })

  it('previousPage decrements currentPage', () => {
    const { result } = renderHook(() =>
      usePagination({ totalItems: 100, initialPage: 3, initialPageSize: 10 })
    )
    act(() => result.current.previousPage())
    expect(result.current.currentPage).toBe(2)
  })

  it('goToPage navigates to specific page', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 100, initialPageSize: 10 }))
    act(() => result.current.goToPage(5))
    expect(result.current.currentPage).toBe(5)
  })

  it('goToPage clamps to valid range', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 100, initialPageSize: 10 }))
    act(() => result.current.goToPage(0))
    expect(result.current.currentPage).toBe(1)
    act(() => result.current.goToPage(999))
    expect(result.current.currentPage).toBe(10)
  })

  it('computes startIndex correctly', () => {
    const { result } = renderHook(() =>
      usePagination({ totalItems: 100, initialPage: 2, initialPageSize: 10 })
    )
    expect(result.current.startIndex).toBe(10)
  })

  it('computes endIndex correctly', () => {
    const { result } = renderHook(() =>
      usePagination({ totalItems: 100, initialPage: 1, initialPageSize: 10 })
    )
    expect(result.current.endIndex).toBe(9)
  })

  it('setPageSize resets to page 1', () => {
    const { result } = renderHook(() =>
      usePagination({ totalItems: 100, initialPage: 3, initialPageSize: 10 })
    )
    act(() => result.current.setPageSize(20))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.pageSize).toBe(20)
    expect(result.current.totalPages).toBe(5)
  })

  it('handles totalItems = 0 gracefully', () => {
    const { result } = renderHook(() => usePagination({ totalItems: 0 }))
    expect(result.current.totalPages).toBe(1)
    expect(result.current.hasNextPage).toBe(false)
  })
})
