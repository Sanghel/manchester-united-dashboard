import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva('inline-flex items-center font-semibold rounded-full', {
  variants: {
    variant: {
      default: 'bg-gray-100 text-gray-700',
      primary: 'bg-primary-100 text-primary-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      danger: 'bg-red-100 text-red-700',
      info: 'bg-blue-100 text-blue-700',
    },
    size: {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-2.5 py-0.5',
      lg: 'text-base px-3 py-1',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
})

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode
  /** Additional className */
  className?: string
}

/**
 * Badge for status labels, counts, and categories.
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="danger" size="md">Error</Badge>
 * ```
 */
export function Badge({ children, variant, size, className }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)}>{children}</span>
}

export { badgeVariants }
