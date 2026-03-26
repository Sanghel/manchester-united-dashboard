import { cn } from '@/lib/utils'

export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const sizeMap: Record<SpacerSize, string> = {
  xs: 'h-1 w-1',
  sm: 'h-2 w-2',
  md: 'h-4 w-4',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-12 w-12',
}

export interface SpacerProps {
  /** Spacing size */
  size?: SpacerSize
  /** Make the spacer fill remaining space (flex-grow) */
  flex?: boolean
  /** Additional className */
  className?: string
}

/**
 * Invisible spacer element for layout spacing.
 *
 * @example
 * ```tsx
 * <Flex>
 *   <Logo />
 *   <Spacer flex />
 *   <Nav />
 * </Flex>
 * ```
 */
export function Spacer({ size = 'md', flex = false, className }: SpacerProps) {
  return <div aria-hidden="true" className={cn(flex ? 'flex-grow' : sizeMap[size], className)} />
}
