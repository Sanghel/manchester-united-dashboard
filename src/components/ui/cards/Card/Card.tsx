import { type HTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva('rounded-xl bg-white', {
  variants: {
    variant: {
      default: 'border border-gray-200',
      elevated: 'shadow-md',
      outlined: 'border-2 border-gray-300',
      interactive:
        'border border-gray-200 cursor-pointer transition-shadow hover:shadow-md hover:border-primary-300',
    },
    padding: {
      none: '',
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-6',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'none',
  },
})

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  /** Make the card visually respond to hover */
  hoverable?: boolean
}

/**
 * Base card container component.
 *
 * @example
 * ```tsx
 * <Card variant="elevated" padding="md">
 *   <CardHeader title="NBA" />
 *   <CardBody>Content here</CardBody>
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hoverable, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, padding }),
          hoverable && 'cursor-pointer transition-shadow hover:shadow-md',
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'
export { cardVariants }
