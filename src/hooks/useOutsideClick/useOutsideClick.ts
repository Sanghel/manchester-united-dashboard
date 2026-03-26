import { useEffect, type RefObject } from 'react'

/**
 * Calls the handler whenever a click occurs outside the referenced element.
 *
 * @param ref - React ref pointing to the element to monitor
 * @param handler - Callback invoked on outside click
 *
 * @example
 * ```ts
 * const ref = useRef<HTMLDivElement>(null)
 * useOutsideClick(ref, () => setOpen(false))
 * ```
 */
export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
