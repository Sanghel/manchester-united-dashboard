import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /** Remove default padding */
  noPadding?: boolean
  /** Compact variant with less padding */
  compact?: boolean
  /** Max height with scroll overflow */
  maxHeight?: string
}

/**
 * Card body/content area.
 */
export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ noPadding = false, compact = false, maxHeight, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          !noPadding && (compact ? 'px-5 py-3' : 'p-5'),
          maxHeight && 'overflow-y-auto',
          className
        )}
        style={maxHeight ? { maxHeight, ...style } : style}
        {...props}
      />
    )
  }
)

CardBody.displayName = 'CardBody'
