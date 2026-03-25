import { forwardRef, type SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectInputProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select label */
  label?: string
  /** Available options */
  options: SelectOption[]
  /** Placeholder option shown when no value selected */
  placeholder?: string
  /** Shows error styling */
  error?: boolean
  /** Error message */
  errorMessage?: string
  /** Select size */
  size?: 'sm' | 'md' | 'lg'
  /** Additional className for the wrapper */
  wrapperClassName?: string
}

const sizeStyles: Record<string, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-4 text-base',
}

/**
 * Select/dropdown component.
 *
 * @example
 * ```tsx
 * <SelectInput
 *   label="League"
 *   options={[{ value: 'nba', label: 'NBA' }, { value: 'nfl', label: 'NFL' }]}
 *   placeholder="Select a league"
 * />
 * ```
 */
export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (
    {
      label,
      options,
      placeholder,
      error = false,
      errorMessage,
      size = 'md',
      className,
      wrapperClassName,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const selectId =
      id ?? (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)
    const errorId = errorMessage ? `${selectId}-error` : undefined

    return (
      <div className={cn('flex flex-col gap-1', wrapperClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              'text-sm font-medium',
              disabled ? 'text-gray-400' : 'text-gray-700',
              error && !disabled && 'text-red-600'
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            aria-invalid={error || undefined}
            aria-describedby={errorId}
            className={cn(
              'w-full appearance-none rounded-md border bg-white outline-none transition-colors',
              'pr-8 cursor-pointer',
              sizeStyles[size],
              error
                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200',
              disabled && 'cursor-not-allowed bg-gray-50 text-gray-400 border-gray-200',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>

          {/* Chevron icon */}
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>

        {error && errorMessage && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)

SelectInput.displayName = 'SelectInput'
