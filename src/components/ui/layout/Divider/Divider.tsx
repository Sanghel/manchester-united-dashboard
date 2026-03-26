import { cn } from '@/lib/utils'

export type DividerOrientation = 'horizontal' | 'vertical'

export interface DividerProps {
  /** Layout orientation */
  orientation?: DividerOrientation
  /** Optional label centered on the divider */
  label?: string
  /** Additional className */
  className?: string
}

/**
 * Visual separator between content sections.
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider orientation="vertical" />
 * <Divider label="OR" />
 * ```
 */
export function Divider({ orientation = 'horizontal', label, className }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('w-px bg-gray-200 self-stretch', className)}
      />
    )
  }

  if (label) {
    return (
      <div role="separator" className={cn('flex items-center gap-3', className)}>
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-500 font-medium whitespace-nowrap">{label}</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>
    )
  }

  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={cn('border-0 border-t border-gray-200', className)}
    />
  )
}
