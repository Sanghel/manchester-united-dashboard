import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface IconProps {
  /** A lucide-react icon component */
  name: LucideIcon
  /** Size in pixels — default 20 */
  size?: number
  /** CSS color value — defaults to currentColor */
  color?: string
  /** Additional className */
  className?: string
  /** Accessible label; set aria-hidden when purely decorative */
  'aria-label'?: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

/**
 * Thin wrapper around lucide-react icons that applies consistent sizing and color.
 *
 * @example
 * ```tsx
 * import { Trophy } from 'lucide-react'
 * <Icon name={Trophy} size={24} color="#FFB81C" />
 * <Icon name={Trophy} aria-label="Trophy" />
 * ```
 */
export function Icon({
  name: LucideIconComponent,
  size = 20,
  color,
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: IconProps) {
  return (
    <LucideIconComponent
      size={size}
      color={color}
      className={cn('inline-block shrink-0', className)}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden ?? (ariaLabel ? undefined : true)}
      data-testid="icon"
    />
  )
}
