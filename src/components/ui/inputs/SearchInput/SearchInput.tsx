import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface SearchInputProps {
  /** Current search value */
  value?: string
  /** Fires when the user changes the input */
  onChange?: (value: string) => void
  /** Fires after the debounce delay with the debounced value */
  onSearch?: (value: string) => void
  /** Fires when the clear button is clicked */
  onClear?: () => void
  /** Debounce delay in ms (default: 300) */
  debounceMs?: number
  /** Placeholder text */
  placeholder?: string
  /** Shows a loading spinner inside the input */
  loading?: boolean
  /** Disables the input */
  disabled?: boolean
  /** Additional className */
  className?: string
  /** Input id */
  id?: string
}

/**
 * Search input with built-in debounce, loading indicator and clear button.
 *
 * @example
 * ```tsx
 * <SearchInput
 *   placeholder="Search teams..."
 *   onSearch={(q) => fetchTeams(q)}
 *   debounceMs={400}
 * />
 * ```
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value: controlledValue,
      onChange,
      onSearch,
      onClear,
      debounceMs = 300,
      placeholder = 'Search...',
      loading = false,
      disabled = false,
      className,
      id,
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined
    const [internalValue, setInternalValue] = useState(controlledValue ?? '')
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const currentValue = isControlled ? controlledValue : internalValue

    useEffect(() => {
      if (isControlled) setInternalValue(controlledValue)
    }, [controlledValue, isControlled])

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (!isControlled) setInternalValue(val)
        onChange?.(val)

        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
          onSearch?.(val)
        }, debounceMs)
      },
      [isControlled, onChange, onSearch, debounceMs]
    )

    const handleClear = useCallback(() => {
      if (!isControlled) setInternalValue('')
      onChange?.('')
      onSearch?.('')
      onClear?.()
    }, [isControlled, onChange, onSearch, onClear])

    useEffect(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current)
      }
    }, [])

    return (
      <div className="relative flex items-center">
        {/* Search icon */}
        <span
          className="absolute left-3 flex items-center pointer-events-none text-gray-400"
          aria-hidden="true"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>

        <input
          ref={ref}
          id={id}
          type="search"
          role="searchbox"
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={placeholder}
          className={cn(
            'w-full h-10 pl-9 pr-9 rounded-md border border-gray-300 bg-white text-sm outline-none',
            'placeholder:text-gray-400 transition-colors',
            'focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:ring-offset-0',
            disabled && 'cursor-not-allowed bg-gray-50 text-gray-400 border-gray-200',
            className
          )}
        />

        {/* Loading or Clear button */}
        <span className="absolute right-3 flex items-center">
          {loading ? (
            <svg
              data-testid="search-spinner"
              className="w-4 h-4 animate-spin text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          ) : currentValue ? (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          ) : null}
        </span>
      </div>
    )
  }
)

SearchInput.displayName = 'SearchInput'
