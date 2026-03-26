import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useInfiniteScroll } from './useInfiniteScroll'

describe('useInfiniteScroll', () => {
  let mockObserver: { observe: ReturnType<typeof vi.fn>; disconnect: ReturnType<typeof vi.fn> }

  beforeEach(() => {
    mockObserver = {
      observe: vi.fn(),
      disconnect: vi.fn(),
    }
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(() => mockObserver)
    )
  })

  afterEach(() => vi.unstubAllGlobals())

  it('returns a ref', () => {
    const { result } = renderHook(() => useInfiniteScroll({ onLoadMore: vi.fn() }))
    expect(result.current).toBeDefined()
    expect(result.current).toHaveProperty('current')
  })

  it('does not create observer when isLoading is true', () => {
    renderHook(() => useInfiniteScroll({ onLoadMore: vi.fn(), isLoading: true }))
    expect(mockObserver.observe).not.toHaveBeenCalled()
  })

  it('does not create observer when hasMore is false', () => {
    renderHook(() => useInfiniteScroll({ onLoadMore: vi.fn(), hasMore: false }))
    expect(mockObserver.observe).not.toHaveBeenCalled()
  })

  it('disconnects observer on unmount', () => {
    const sentinelEl = document.createElement('div')
    const { unmount } = renderHook(() => {
      const ref = useInfiniteScroll({ onLoadMore: vi.fn() })
      Object.defineProperty(ref, 'current', { value: sentinelEl, writable: true })
      return ref
    })
    unmount()
    expect(mockObserver.disconnect).toHaveBeenCalled()
  })
})
