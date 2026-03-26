import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCopyToClipboard } from './useCopyToClipboard'

describe('useCopyToClipboard', () => {
  let writeText: ReturnType<typeof vi.fn>

  beforeEach(() => {
    vi.useFakeTimers()
    writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { clipboard: { writeText } })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('initial state: copied is false', () => {
    const { result } = renderHook(() => useCopyToClipboard())
    expect(result.current.copied).toBe(false)
  })

  it('sets copied to true after successful copy', async () => {
    const { result } = renderHook(() => useCopyToClipboard())
    await act(async () => {
      await result.current.copy('hello')
    })
    expect(result.current.copied).toBe(true)
    expect(writeText).toHaveBeenCalledWith('hello')
  })

  it('resets copied after delay', async () => {
    const { result } = renderHook(() => useCopyToClipboard(1000))
    await act(async () => {
      await result.current.copy('text')
    })
    expect(result.current.copied).toBe(true)
    act(() => vi.advanceTimersByTime(1000))
    expect(result.current.copied).toBe(false)
  })

  it('reset function sets copied to false immediately', async () => {
    const { result } = renderHook(() => useCopyToClipboard(0))
    await act(async () => {
      await result.current.copy('text')
    })
    act(() => result.current.reset())
    expect(result.current.copied).toBe(false)
  })

  it('sets copied to false when clipboard write fails', async () => {
    writeText.mockRejectedValueOnce(new Error('denied'))
    const { result } = renderHook(() => useCopyToClipboard())
    await act(async () => {
      await result.current.copy('text')
    })
    expect(result.current.copied).toBe(false)
  })
})
