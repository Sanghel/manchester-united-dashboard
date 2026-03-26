import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const stackVariants = cva('flex', {
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    spacing: {
      none: '',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    spacing: 'md',
    align: 'stretch',
  },
})

export interface StackProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {}

/**
 * Stack layout component for arranging children vertically or horizontally with even spacing.
 *
 * @example
 * ```tsx
 * <Stack spacing="md">
 *   <Card />
 *   <Card />
 *   <Card />
 * </Stack>
 * ```
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ direction, spacing, align, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(stackVariants({ direction, spacing, align }), className)}
      {...props}
    />
  )
)

Stack.displayName = 'Stack'
