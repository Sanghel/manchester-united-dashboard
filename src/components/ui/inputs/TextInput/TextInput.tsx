import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type TextInputSize = 'sm' | 'md' | 'lg'
export type IconPosition = 'left' | 'right'

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input label */
  label?: string
  /** Shows error styling and optional message */
  error?: boolean
  /** Error message displayed below the input */
  errorMessage?: string
  /** Icon element to display inside the input */
  icon?: ReactNode
  /** Position of the icon */
  iconPosition?: IconPosition
  /** Helper text displayed below the input */
  helperText?: string
  /** Input size variant */
  size?: TextInputSize
  /** Additional className for the wrapper div */
  wrapperClassName?: string
}

const sizeStyles: Record<TextInputSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-4 text-base',
}

const iconSizeStyles: Record<TextInputSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
}

/**
 * Text input component with support for labels, icons, error states and multiple sizes.
 *
 * @example
 * ```tsx
 * <TextInput label="Email" placeholder="you@example.com" />
 *
 * <TextInput
 *   label="Search"
 *   icon={<SearchIcon />}
 *   iconPosition="left"
 *   size="md"
 * />
 *
 * <TextInput
 *   label="Username"
 *   error
 *   errorMessage="Username is already taken"
 * />
 * ```
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      error = false,
      errorMessage,
      icon,
      iconPosition = 'left',
      helperText,
      size = 'md',
      className,
      wrapperClassName,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)
    const errorId = errorMessage ? `${inputId}-error` : undefined
    const helperTextId = helperText ? `${inputId}-helper` : undefined

    const hasLeftIcon = icon && iconPosition === 'left'
    const hasRightIcon = icon && iconPosition === 'right'

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

        <div className="relative flex items-center">
          {hasLeftIcon && (
            <span
              className={cn(
                'absolute left-3 flex items-center pointer-events-none',
                iconSizeStyles[size],
                disabled ? 'text-gray-300' : error ? 'text-red-400' : 'text-gray-400'
              )}
              aria-hidden="true"
            >
              {icon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={error || undefined}
            aria-describedby={[errorId, helperTextId].filter(Boolean).join(' ') || undefined}
            className={cn(
              'w-full rounded-md border bg-white outline-none transition-colors',
              'placeholder:text-gray-400',
              'focus:ring-2 focus:ring-offset-0',
              sizeStyles[size],
              hasLeftIcon && 'pl-9',
              hasRightIcon && 'pr-9',
              error
                ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200',
              disabled && 'cursor-not-allowed bg-gray-50 text-gray-400 border-gray-200',
              className
            )}
            {...props}
          />

          {hasRightIcon && (
            <span
              className={cn(
                'absolute right-3 flex items-center pointer-events-none',
                iconSizeStyles[size],
                disabled ? 'text-gray-300' : error ? 'text-red-400' : 'text-gray-400'
              )}
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
        </div>

        {error && errorMessage && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        )}

        {!error && helperText && (
          <p id={helperTextId} className="text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

TextInput.displayName = 'TextInput'
