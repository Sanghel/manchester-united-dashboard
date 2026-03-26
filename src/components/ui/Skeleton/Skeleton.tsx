import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const skeletonVariants = cva('bg-[#2A2A2A] rounded animate-[pulse_1.5s_ease-in-out_infinite]', {
  variants: {
    variant: {
      /** Single line of text */
      text: 'h-4 w-full rounded',
      /** Card-shaped block */
      card: 'rounded-xl',
      /** Circular avatar placeholder */
      avatar: 'rounded-full',
      /** Generic rectangle */
      rect: 'rounded',
    },
  },
  defaultVariants: {
    variant: 'rect',
  },
})

export interface SkeletonProps extends VariantProps<typeof skeletonVariants> {
  /** Width (e.g. "200px", "50%") */
  width?: string
  /** Height (e.g. "40px", "2rem") */
  height?: string
  /** Additional className */
  className?: string
  /**
   * Number of text rows to render — only meaningful when variant="text".
   * @default 1
   */
  count?: number
}

/**
 * Animated loading placeholder that pulses between opaque and translucent.
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" count={3} />
 * <Skeleton variant="avatar" width="48px" height="48px" />
 * <Skeleton variant="card" width="100%" height="180px" />
 * ```
 */
export function Skeleton({ variant, width, height, className, count = 1 }: SkeletonProps) {
  if (variant === 'text' && count > 1) {
    return (
      <div className="flex flex-col gap-2" data-testid="skeleton-group">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={cn(skeletonVariants({ variant }), i === count - 1 && 'w-3/4', className)}
            style={{ width: i === count - 1 ? undefined : width, height }}
            aria-hidden="true"
            data-testid="skeleton"
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(skeletonVariants({ variant }), className)}
      style={{ width, height }}
      aria-hidden="true"
      data-testid="skeleton"
    />
  )
}
