import { useState, useCallback } from 'react'

/**
 * Boolean toggle state with a stable toggle function.
 *
 * @param initialValue - Starting value (default: false)
 *
 * @example
 * ```ts
 * const [isOpen, toggleOpen, setOpen] = useToggle(false)
 * ```
 */
export function useToggle(initialValue = false): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => setValue((v) => !v), [])
  return [value, toggle, setValue]
}
