import { forwardRef, type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const iconButtonVariants = cva(
  'inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
        secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-400',
        outline:
          'border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-400',
        ghost: 'hover:bg-gray-100 text-gray-600 focus-visible:ring-gray-400',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
      },
      size: {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
      },
      shape: {
        square: 'rounded-md',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'md',
      shape: 'square',
    },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
  /** The icon to display */
  icon: ReactNode
  /** Accessible label (required for screen readers) */
  ariaLabel: string
}

/**
 * Icon-only button with accessible label.
 *
 * @example
 * ```tsx
 * <IconButton icon={<TrashIcon />} ariaLabel="Delete item" variant="danger" />
 * ```
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, ariaLabel, variant, size, shape, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        className={cn(iconButtonVariants({ variant, size, shape }), className)}
        {...props}
      >
        <span aria-hidden="true">{icon}</span>
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'
