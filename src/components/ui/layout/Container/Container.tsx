import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const containerVariants = cva('mx-auto w-full px-4', {
  variants: {
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    maxWidth: 'xl',
  },
})

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

/**
 * Responsive container that centers content and constrains max-width.
 *
 * @example
 * ```tsx
 * <Container maxWidth="lg">
 *   <p>Content</p>
 * </Container>
 * ```
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth, className, ...props }, ref) => (
    <div ref={ref} className={cn(containerVariants({ maxWidth }), className)} {...props} />
  )
)

Container.displayName = 'Container'
