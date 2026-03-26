import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface EmptyStateProps {
  /** Heading text */
  title: string
  /** Supporting description */
  description?: string
  /** Icon or illustration */
  icon?: ReactNode
  /** Primary action button */
  action?: ReactNode
  /** Additional className */
  className?: string
}

/**
 * Empty state placeholder when there is no content to display.
 *
 * @example
 * ```tsx
 * <EmptyState
 *   title="No matches found"
 *   description="Try adjusting your filters."
 *   icon={<SearchIcon />}
 *   action={<Button>Clear Filters</Button>}
 * />
 * ```
 */
export function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center py-12 px-4 text-center', className)}
    >
      {icon && (
        <div className="mb-4 text-gray-300 text-5xl" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      {description && <p className="mt-1 text-sm text-gray-500 max-w-sm">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}
