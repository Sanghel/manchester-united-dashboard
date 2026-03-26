import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCountdown } from './useCountdown'

describe('useCountdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('starts with initial count', () => {
    const { result } = renderHook(() => useCountdown(60))
    expect(result.current.count).toBe(60)
  })

  it('is not running by default', () => {
    const { result } = renderHook(() => useCountdown(60))
    expect(result.current.isRunning).toBe(false)
  })

  it('auto-starts when autoStart is true', () => {
    const { result } = renderHook(() => useCountdown(60, true))
    expect(result.current.isRunning).toBe(true)
  })

  it('decrements count each second', () => {
    const { result } = renderHook(() => useCountdown(10))
    act(() => result.current.start())
    act(() => vi.advanceTimersByTime(3000))
    expect(result.current.count).toBe(7)
  })

  it('stops at 0', () => {
    const { result } = renderHook(() => useCountdown(2))
    act(() => result.current.start())
    act(() => vi.advanceTimersByTime(3000))
    expect(result.current.count).toBe(0)
    expect(result.current.isRunning).toBe(false)
  })

  it('pause stops the countdown', () => {
    const { result } = renderHook(() => useCountdown(10))
    act(() => result.current.start())
    act(() => vi.advanceTimersByTime(2000))
    act(() => result.current.pause())
    const countAtPause = result.current.count
    act(() => vi.advanceTimersByTime(2000))
    expect(result.current.count).toBe(countAtPause)
    expect(result.current.isRunning).toBe(false)
  })

  it('reset restores to initial count', () => {
    const { result } = renderHook(() => useCountdown(10))
    act(() => result.current.start())
    act(() => vi.advanceTimersByTime(3000))
    act(() => result.current.reset())
    expect(result.current.count).toBe(10)
    expect(result.current.isRunning).toBe(false)
  })

  it('does not start when count is 0', () => {
    const { result } = renderHook(() => useCountdown(0))
    act(() => result.current.start())
    expect(result.current.isRunning).toBe(false)
  })
})
