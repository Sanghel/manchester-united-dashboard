import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useBreakpoint } from './useBreakpoint'

/**
 * Helper: mock window.matchMedia so that only queries whose
 * min-width is <= the given viewport width return matches=true.
 */
function mockViewport(width: number) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => {
    const match = query.match(/\(min-width:\s*(\d+)px\)/)
    const minWidth = match ? parseInt(match[1], 10) : 0
    const matches = width >= minWidth
    return {
      matches,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }
  })
}

describe('useBreakpoint', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns sm breakpoint below 768px', () => {
    mockViewport(600)
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current.breakpoint).toBe('sm')
    expect(result.current.isMobile).toBe(true)
    expect(result.current.isTablet).toBe(false)
    expect(result.current.isDesktop).toBe(false)
  })

  it('returns md breakpoint at 768px', () => {
    mockViewport(768)
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current.breakpoint).toBe('md')
    expect(result.current.isMobile).toBe(false)
    expect(result.current.isTablet).toBe(true)
    expect(result.current.isDesktop).toBe(false)
  })

  it('returns lg breakpoint at 1024px', () => {
    mockViewport(1024)
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current.breakpoint).toBe('lg')
    expect(result.current.isMobile).toBe(false)
    expect(result.current.isTablet).toBe(false)
    expect(result.current.isDesktop).toBe(true)
  })

  it('returns xl breakpoint at 1280px', () => {
    mockViewport(1280)
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current.breakpoint).toBe('xl')
    expect(result.current.isMobile).toBe(false)
    expect(result.current.isTablet).toBe(false)
    expect(result.current.isDesktop).toBe(true)
  })

  it('returns 2xl breakpoint at 1536px', () => {
    mockViewport(1536)
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current.breakpoint).toBe('2xl')
    expect(result.current.isMobile).toBe(false)
    expect(result.current.isTablet).toBe(false)
    expect(result.current.isDesktop).toBe(true)
  })

  it('returns sm for very small screens', () => {
    mockViewport(320)
    const { result } = renderHook(() => useBreakpoint())
    expect(result.current.breakpoint).toBe('sm')
    expect(result.current.isMobile).toBe(true)
  })
})
