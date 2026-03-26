import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'col-reverse': 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
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
    direction: 'row',
    align: 'start',
    justify: 'start',
    wrap: 'nowrap',
    gap: 'none',
  },
})

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexVariants> {}

/**
 * Flexbox layout component with alignment and gap variants.
 *
 * @example
 * ```tsx
 * <Flex direction="row" align="center" justify="between" gap="md">
 *   <Logo />
 *   <Nav />
 * </Flex>
 * ```
 */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ direction, align, justify, wrap, gap, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(flexVariants({ direction, align, justify, wrap, gap }), className)}
      {...props}
    />
  )
)

Flex.displayName = 'Flex'
