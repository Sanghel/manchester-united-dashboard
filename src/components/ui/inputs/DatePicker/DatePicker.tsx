import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Field label */
  label?: string
  /** Minimum selectable date (YYYY-MM-DD) */
  minDate?: string
  /** Maximum selectable date (YYYY-MM-DD) */
  maxDate?: string
  /** Shows error styling */
  error?: boolean
  /** Error message */
  errorMessage?: string
  /** Additional className for the wrapper */
  wrapperClassName?: string
}

/**
 * Date picker using the native HTML5 date input.
 *
 * @example
 * ```tsx
 * <DatePicker
 *   label="Match date"
 *   minDate="2024-01-01"
 *   maxDate="2024-12-31"
 *   onChange={(e) => setDate(e.target.value)}
 * />
 * ```
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label,
      minDate,
      maxDate,
      error = false,
      errorMessage,
      className,
      wrapperClassName,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? (label ? `date-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)
    const errorId = errorMessage ? `${inputId}-error` : undefined

    return (
      <div className={cn('flex flex-col gap-1', wrapperClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'text-sm font-medium',
              disabled ? 'text-gray-400' : 'text-gray-700',
              error && !disabled && 'text-red-600'
            )}
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          type="date"
          id={inputId}
          min={minDate}
          max={maxDate}
          disabled={disabled}
          aria-invalid={error || undefined}
          aria-describedby={errorId}
          className={cn(
            'h-10 w-full rounded-md border bg-white px-4 text-sm outline-none transition-colors',
            'focus:ring-2 focus:ring-offset-0',
            error
              ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200',
            disabled && 'cursor-not-allowed bg-gray-50 text-gray-400 border-gray-200',
            className
          )}
          {...props}
        />

        {error && errorMessage && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)

DatePicker.displayName = 'DatePicker'
