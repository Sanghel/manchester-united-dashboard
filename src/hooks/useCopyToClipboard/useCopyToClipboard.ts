import { useState, useCallback } from 'react'

export interface UseCopyToClipboardResult {
  copied: boolean
  copy: (text: string) => Promise<void>
  reset: () => void
}

/**
 * Copies text to the clipboard and tracks success state.
 * The `copied` flag resets after the specified timeout.
 *
 * @param resetDelay - How long to show the copied state in ms (default: 2000)
 *
 * @example
 * ```ts
 * const { copied, copy } = useCopyToClipboard()
 * <button onClick={() => copy('some text')}>{copied ? 'Copied!' : 'Copy'}</button>
 * ```
 */
export function useCopyToClipboard(resetDelay = 2000): UseCopyToClipboardResult {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        if (resetDelay > 0) {
          setTimeout(() => setCopied(false), resetDelay)
        }
      } catch {
        setCopied(false)
      }
    },
    [resetDelay]
  )

  const reset = useCallback(() => setCopied(false), [])

  return { copied, copy, reset }
}
