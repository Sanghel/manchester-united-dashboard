import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const skeletonVariants = cva('animate-pulse bg-gray-200 rounded', {
  variants: {
    variant: {
      text: 'h-4 w-full rounded',
      heading: 'h-6 w-3/4 rounded',
      circle: 'rounded-full',
      rectangle: 'rounded',
      card: 'rounded-xl',
    },
  },
  defaultVariants: {
    variant: 'rectangle',
  },
})

export interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  /** Width (e.g. "100px", "50%") */
  width?: string
  /** Height (e.g. "20px", "2rem") */
  height?: string
  /** Additional className */
  className?: string
}

/**
 * Skeleton placeholder for loading states.
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" width="200px" />
 * <Skeleton variant="circle" width="40px" height="40px" />
 * ```
 */
export function Skeleton({ variant, width, height, className }: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ variant }), className)}
      style={{ width, height }}
      aria-hidden="true"
      data-testid="skeleton"
    />
  )
}
