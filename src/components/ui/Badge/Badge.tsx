import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva('inline-flex items-center font-semibold rounded-full', {
  variants: {
    variant: {
      /** WIN result — green */
      win: 'bg-[#10B981] text-white',
      /** DRAW result — orange */
      draw: 'bg-[#F59E0B] text-white',
      /** LOSS result — red */
      loss: 'bg-[#EF4444] text-white',
      /** General / neutral dark badge */
      default: 'bg-[#2A2A2A] text-white',
      /** MU gold on dark — for competition names, position badges */
      gold: 'bg-[#FFB81C] text-[#1A1A1A]',
    },
    size: {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-2.5 py-0.5',
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
 * MU-themed badge for match results (WIN/DRAW/LOSS), competition names, and position labels.
 *
 * @example
 * ```tsx
 * <Badge variant="win">WIN</Badge>
 * <Badge variant="draw">DRAW</Badge>
 * <Badge variant="loss">LOSS</Badge>
 * <Badge variant="gold">Premier League</Badge>
 * ```
 */
export function Badge({ children, variant, size, className }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size }), className)}>{children}</span>
}
