import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Add a top border divider */
  divider?: boolean
  /** Justify content */
  justify?: 'start' | 'end' | 'center' | 'between'
}

const justifyStyles: Record<string, string> = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
}

/**
 * Card footer area.
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ divider = false, justify = 'start', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center px-5 pb-5 pt-3 gap-2',
          divider && 'border-t border-gray-100 pt-4',
          justifyStyles[justify],
          className
        )}
        {...props}
      />
    )
  }
)

CardFooter.displayName = 'CardFooter'
