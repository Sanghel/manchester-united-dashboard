import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useMediaQuery } from './useMediaQuery'

describe('useMediaQuery', () => {
  const mockMatchMedia = (matches: boolean) => {
    const listeners: ((e: { matches: boolean }) => void)[] = []
    const mql = {
      matches,
      addEventListener: vi.fn((_: string, cb: (e: { matches: boolean }) => void) => {
        listeners.push(cb)
      }),
      removeEventListener: vi.fn(),
      _trigger: (value: boolean) => listeners.forEach((cb) => cb({ matches: value })),
    }
    window.matchMedia = vi.fn().mockReturnValue(mql)
    return mql
  }

  afterEach(() => vi.restoreAllMocks())

  it('returns true when query matches', () => {
    mockMatchMedia(true)
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'))
    expect(result.current).toBe(true)
  })

  it('returns false when query does not match', () => {
    mockMatchMedia(false)
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'))
    expect(result.current).toBe(false)
  })

  it('updates when media query changes', () => {
    const mql = mockMatchMedia(false)
    const { result } = renderHook(() => useMediaQuery('(max-width: 768px)'))
    expect(result.current).toBe(false)
    act(() => mql._trigger(true))
    expect(result.current).toBe(true)
  })

  it('removes event listener on unmount', () => {
    const mql = mockMatchMedia(false)
    const { unmount } = renderHook(() => useMediaQuery('(max-width: 768px)'))
    unmount()
    expect(mql.removeEventListener).toHaveBeenCalled()
  })
})
