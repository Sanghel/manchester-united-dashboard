import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Card } from '../Card'

export type StatsTrend = 'up' | 'down' | 'neutral'

export interface StatsCardProps {
  /** Stat label */
  label: string
  /** Main value */
  value: string | number
  /** Optional sub-value or unit */
  subValue?: string
  /** Trend direction */
  trend?: StatsTrend
  /** Trend percentage or label */
  trendLabel?: string
  /** Icon to display */
  icon?: ReactNode
  /** Card description */
  description?: string
  /** Additional className */
  className?: string
}

const trendConfig: Record<StatsTrend, { className: string; symbol: string }> = {
  up: { className: 'text-green-600', symbol: '↑' },
  down: { className: 'text-red-600', symbol: '↓' },
  neutral: { className: 'text-gray-500', symbol: '→' },
}

/**
 * Stats card displaying a key metric with optional trend indicator.
 *
 * @example
 * ```tsx
 * <StatsCard
 *   label="Goals Scored"
 *   value={42}
 *   trend="up"
 *   trendLabel="+5 this month"
 *   description="Total goals in current season"
 * />
 * ```
 */
export function StatsCard({
  label,
  value,
  subValue,
  trend,
  trendLabel,
  icon,
  description,
  className,
}: StatsCardProps) {
  const trendStyle = trend ? trendConfig[trend] : null

  return (
    <Card variant="default" className={cn('p-5', className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-500 truncate">{label}</p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900 tabular-nums">{value}</span>
            {subValue && <span className="text-sm text-gray-500">{subValue}</span>}
          </div>
          {trend && trendLabel && (
            <p className={cn('mt-1 text-sm font-medium', trendStyle?.className)}>
              <span aria-hidden="true">{trendStyle?.symbol} </span>
              <span aria-label={`Trend: ${trend}`}>{trendLabel}</span>
            </p>
          )}
          {description && <p className="mt-2 text-xs text-gray-400">{description}</p>}
        </div>
        {icon && (
          <div className="ml-4 flex-shrink-0 text-primary-500" aria-hidden="true">
            {icon}
          </div>
        )}
      </div>
    </Card>
  )
}
