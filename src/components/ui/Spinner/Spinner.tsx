import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const spinnerVariants = cva('animate-spin rounded-full border-2 border-t-transparent', {
  variants: {
    size: {
      /** 16px */
      sm: 'w-4 h-4',
      /** 24px */
      md: 'w-6 h-6',
      /** 32px */
      lg: 'w-8 h-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  /** Accessible label for screen readers */
  label?: string
  /**
   * Border color. Defaults to MU red `#DA291C`.
   * Pass a Tailwind color class or inline style via className.
   */
  color?: string
  /** Additional className applied to the outer wrapper */
  className?: string
}

/**
 * Circular spinning loader. Defaults to MU red (#DA291C).
 *
 * @example
 * ```tsx
 * <Spinner size="sm" />
 * <Spinner size="lg" color="#FFB81C" label="Loading standings..." />
 * ```
 */
export function Spinner({
  size,
  color = '#DA291C',
  label = 'Loading...',
  className,
}: SpinnerProps) {
  return (
    <span role="status" aria-label={label} className={cn('inline-block', className)}>
      <span
        className={spinnerVariants({ size })}
        style={{ borderColor: color, borderTopColor: 'transparent' }}
        aria-hidden="true"
        data-testid="spinner"
      />
    </span>
  )
}

export { spinnerVariants }
