import { type HTMLAttributes, type ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Main title */
  title?: ReactNode
  /** Subtitle or description */
  subtitle?: ReactNode
  /** Actions (e.g. icon buttons) aligned to the right */
  actions?: ReactNode
  /** Avatar or icon on the left */
  avatar?: ReactNode
}

/**
 * Card header with title, subtitle, avatar and actions slots.
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, subtitle, actions, avatar, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-start justify-between gap-3 p-5 pb-0', className)}
        {...props}
      >
        <div className="flex items-start gap-3 min-w-0">
          {avatar && <div className="shrink-0">{avatar}</div>}
          {(title || subtitle) && (
            <div className="min-w-0">
              {title && (
                <h3 className="font-semibold text-gray-900 truncate leading-snug">{title}</h3>
              )}
              {subtitle && (
                <p className="text-sm text-gray-500 truncate leading-snug">{subtitle}</p>
              )}
            </div>
          )}
          {children}
        </div>
        {actions && <div className="shrink-0 flex items-center gap-1">{actions}</div>}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'
