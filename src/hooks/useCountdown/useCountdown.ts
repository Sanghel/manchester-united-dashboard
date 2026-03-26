import { useState, useEffect, useCallback, useRef } from 'react'

export interface UseCountdownResult {
  count: number
  isRunning: boolean
  start: () => void
  pause: () => void
  reset: () => void
}

/**
 * Countdown timer that counts down from a given value to zero.
 *
 * @param initialCount - Starting count in seconds
 * @param autoStart - Whether to start automatically (default: false)
 *
 * @example
 * ```ts
 * const { count, isRunning, start, pause, reset } = useCountdown(60)
 * ```
 */
export function useCountdown(initialCount: number, autoStart = false): UseCountdownResult {
  const [count, setCount] = useState(initialCount)
  const [isRunning, setIsRunning] = useState(autoStart)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => {
        if (c <= 1) {
          clearInterval(intervalRef.current!)
          setIsRunning(false)
          return 0
        }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current!)
  }, [isRunning])

  const start = useCallback(() => {
    if (count > 0) setIsRunning(true)
  }, [count])

  const pause = useCallback(() => setIsRunning(false), [])

  const reset = useCallback(() => {
    setIsRunning(false)
    setCount(initialCount)
  }, [initialCount])

  return { count, isRunning, start, pause, reset }
}
