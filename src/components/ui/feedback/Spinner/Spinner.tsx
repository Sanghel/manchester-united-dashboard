import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const spinnerVariants = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
      },
      color: {
        primary: 'text-primary-600',
        white: 'text-white',
        gray: 'text-gray-400',
        current: 'text-current',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  }
)

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  /** Accessible label */
  label?: string
  /** Additional className */
  className?: string
}

/**
 * Loading spinner with configurable size and color.
 *
 * @example
 * ```tsx
 * <Spinner size="lg" color="primary" label="Loading scores..." />
 * ```
 */
export function Spinner({ size, color, label = 'Loading...', className }: SpinnerProps) {
  return (
    <span role="status" aria-label={label} className={cn('inline-block', className)}>
      <span className={spinnerVariants({ size, color })} aria-hidden="true" />
    </span>
  )
}

export { spinnerVariants }
