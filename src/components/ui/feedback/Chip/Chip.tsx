import { type ReactNode, type MouseEventHandler } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const chipVariants = cva(
  'inline-flex items-center gap-1 rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        filled: 'bg-gray-100 text-gray-700',
        outlined: 'border border-gray-300 text-gray-700',
        primary: 'bg-primary-100 text-primary-700',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-1.5',
      },
      selected: {
        true: 'bg-primary-600 text-white border-primary-600',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
      selected: false,
    },
  }
)

export interface ChipProps extends VariantProps<typeof chipVariants> {
  children: ReactNode
  /** Show a remove/close button */
  onRemove?: () => void
  /** Icon on the left */
  icon?: ReactNode
  /** Click handler (makes chip interactive) */
  onClick?: MouseEventHandler<HTMLSpanElement>
  /** Additional className */
  className?: string
}

/**
 * Chip/tag component for filters, selections, and labels.
 *
 * @example
 * ```tsx
 * <Chip variant="primary" selected onRemove={() => {}}>Premier League</Chip>
 * ```
 */
export function Chip({
  children,
  variant,
  size,
  selected,
  icon,
  onRemove,
  onClick,
  className,
}: ChipProps) {
  return (
    <span
      className={cn(
        chipVariants({ variant, size, selected }),
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-pressed={onClick ? Boolean(selected) : undefined}
    >
      {icon && (
        <span className="flex-shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className="ml-0.5 rounded-full hover:bg-black/10 p-0.5 flex-shrink-0"
          aria-label="Remove"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
            <path
              d="M2 2l6 6M8 2L2 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </span>
  )
}
