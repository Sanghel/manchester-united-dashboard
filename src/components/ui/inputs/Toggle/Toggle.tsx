import { type InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export type ToggleSize = 'sm' | 'md' | 'lg'

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label displayed next to the toggle */
  label?: string
  /** Label position relative to the toggle */
  labelPosition?: 'left' | 'right'
  /** Toggle size */
  size?: ToggleSize
}

const trackStyles: Record<ToggleSize, string> = {
  sm: 'w-8 h-4',
  md: 'w-11 h-6',
  lg: 'w-14 h-7',
}

const thumbStyles: Record<ToggleSize, string> = {
  sm: 'w-3 h-3 translate-x-0.5 peer-checked:translate-x-4',
  md: 'w-5 h-5 translate-x-0.5 peer-checked:translate-x-5',
  lg: 'w-6 h-6 translate-x-0.5 peer-checked:translate-x-7',
}

const labelTextStyles: Record<ToggleSize, string> = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

/**
 * Toggle switch component.
 *
 * @example
 * ```tsx
 * <Toggle label="Enable live scores" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
 * ```
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, labelPosition = 'right', size = 'md', className, disabled, id, ...props }, ref) => {
    const inputId = id ?? (label ? `toggle-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)

    const trackEl = (
      <div className="relative inline-flex items-center">
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={inputId}
          disabled={disabled}
          className="sr-only peer"
          {...props}
        />
        <div
          className={cn(
            'rounded-full transition-colors cursor-pointer',
            trackStyles[size],
            'bg-gray-200 peer-checked:bg-primary-600',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2',
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
        />
        <div
          className={cn(
            'absolute rounded-full bg-white shadow transition-transform',
            thumbStyles[size]
          )}
        />
      </div>
    )

    if (!label) return trackEl

    return (
      <label
        htmlFor={inputId}
        className={cn(
          'inline-flex items-center gap-2 cursor-pointer',
          disabled && 'cursor-not-allowed opacity-60',
          labelTextStyles[size],
          'font-medium text-gray-700'
        )}
      >
        {labelPosition === 'left' && <span>{label}</span>}
        {trackEl}
        {labelPosition === 'right' && <span>{label}</span>}
      </label>
    )
  }
)

Toggle.displayName = 'Toggle'
