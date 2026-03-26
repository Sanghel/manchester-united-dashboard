import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useDebouncedCallback } from './useDebouncedCallback'

describe('useDebouncedCallback', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('returns a stable function', () => {
    const callback = vi.fn()
    const { result, rerender } = renderHook(() => useDebouncedCallback(callback, 300))
    const fn1 = result.current
    rerender()
    expect(result.current).toBe(fn1)
  })

  it('does not call callback before delay', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useDebouncedCallback(callback, 300))
    act(() => result.current('test'))
    expect(callback).not.toHaveBeenCalled()
  })

  it('calls callback after delay', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useDebouncedCallback(callback, 300))
    act(() => result.current('test'))
    act(() => vi.advanceTimersByTime(300))
    expect(callback).toHaveBeenCalledWith('test')
    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('only calls once on rapid invocations', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useDebouncedCallback(callback, 300))
    act(() => {
      result.current('a')
      result.current('b')
      result.current('c')
    })
    act(() => vi.advanceTimersByTime(300))
    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('c')
  })

  it('uses 300ms default delay', () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useDebouncedCallback(callback))
    act(() => result.current('test'))
    act(() => vi.advanceTimersByTime(300))
    expect(callback).toHaveBeenCalled()
  })
})
