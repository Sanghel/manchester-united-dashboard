import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const gridVariants = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      12: 'grid-cols-12',
    },
    gap: {
      none: '',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
  },
  defaultVariants: {
    cols: 1,
    gap: 'md',
  },
})

export interface GridProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {}

/**
 * CSS grid layout component.
 *
 * @example
 * ```tsx
 * <Grid cols={3} gap="md">
 *   <Card />
 *   <Card />
 *   <Card />
 * </Grid>
 * ```
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols, gap, className, ...props }, ref) => (
    <div ref={ref} className={cn(gridVariants({ cols, gap }), className)} {...props} />
  )
)

Grid.displayName = 'Grid'
