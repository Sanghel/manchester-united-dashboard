import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type ButtonGroupOrientation = 'horizontal' | 'vertical'

export interface ButtonGroupProps {
  /** Button elements */
  children: ReactNode
  /** Layout direction */
  orientation?: ButtonGroupOrientation
  /** Gap between buttons (ignored for attached variant) */
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  /** Attach buttons together (no gap, shared borders) */
  attached?: boolean
  /** Additional className */
  className?: string
}

const spacingStyles: Record<string, string> = {
  none: 'gap-0',
  sm: 'gap-1',
  md: 'gap-2',
  lg: 'gap-3',
}

/**
 * Groups multiple buttons together horizontally or vertically.
 *
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button variant="outline">Day</Button>
 *   <Button variant="outline">Week</Button>
 *   <Button variant="outline">Month</Button>
 * </ButtonGroup>
 *
 * <ButtonGroup attached>
 *   <Button variant="outline">Previous</Button>
 *   <Button variant="outline">Next</Button>
 * </ButtonGroup>
 * ```
 */
export function ButtonGroup({
  children,
  orientation = 'horizontal',
  spacing = 'md',
  attached = false,
  className,
}: ButtonGroupProps) {
  return (
    <div
      role="group"
      className={cn(
        'inline-flex',
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        attached
          ? [
              orientation === 'vertical'
                ? '[&>button:not(:first-child)]:rounded-t-none [&>button:not(:last-child)]:rounded-b-none [&>button:not(:first-child)]:-mt-px'
                : '[&>button:not(:first-child)]:rounded-l-none [&>button:not(:last-child)]:rounded-r-none [&>button:not(:first-child)]:-ml-px',
              'gap-0',
            ]
          : spacingStyles[spacing],
        className
      )}
    >
      {children}
    </div>
  )
}
