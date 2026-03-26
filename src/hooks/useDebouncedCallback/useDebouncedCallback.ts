import { useCallback, useRef } from 'react'

/**
 * Returns a debounced version of the callback that only fires after
 * the specified delay has passed without being called again.
 *
 * @param callback - The function to debounce
 * @param delay - Delay in milliseconds (default: 300)
 *
 * @example
 * ```ts
 * const onSearch = useDebouncedCallback((value: string) => {
 *   fetchResults(value)
 * }, 500)
 * ```
 */
export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay = 300
): (...args: Parameters<T>) => void {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  return useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        callbackRef.current(...args)
      }, delay)
    },
    [delay]
  )
}
