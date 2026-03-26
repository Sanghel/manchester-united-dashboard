import { type MouseEventHandler } from 'react'
import { cn } from '@/lib/utils'
import { Card } from '../Card'

export interface TeamCardProps {
  /** Team name */
  name: string
  /** Team abbreviation */
  abbreviation?: string
  /** Team logo URL */
  logo?: string
  /** League or competition name */
  league?: string
  /** Season record (e.g., "22W 8L 5D") */
  record?: string
  /** Current position in standings */
  position?: number
  /** Points */
  points?: number
  /** Click handler */
  onClick?: MouseEventHandler<HTMLDivElement>
  /** Additional className */
  className?: string
}

/**
 * Card displaying team information and basic stats.
 *
 * @example
 * ```tsx
 * <TeamCard
 *   name="Manchester United"
 *   abbreviation="MUN"
 *   league="Premier League"
 *   position={3}
 *   points={58}
 * />
 * ```
 */
export function TeamCard({
  name,
  abbreviation,
  logo,
  league,
  record,
  position,
  points,
  onClick,
  className,
}: TeamCardProps) {
  return (
    <Card
      variant={onClick ? 'interactive' : 'default'}
      className={cn('p-4', className)}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="flex items-center gap-3">
        {/* Logo / Initials */}
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="w-12 h-12 object-contain flex-shrink-0" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-primary-700">
              {(abbreviation ?? name).slice(0, 3).toUpperCase()}
            </span>
          </div>
        )}

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 truncate">{name}</p>
          {league && <p className="text-xs text-gray-500 truncate">{league}</p>}
          {record && <p className="text-xs text-gray-400 mt-0.5">{record}</p>}
        </div>

        {/* Position / Points */}
        {(position !== undefined || points !== undefined) && (
          <div className="flex-shrink-0 text-right">
            {position !== undefined && (
              <p className="text-lg font-bold text-gray-900">#{position}</p>
            )}
            {points !== undefined && <p className="text-xs text-gray-500">{points} pts</p>}
          </div>
        )}
      </div>
    </Card>
  )
}
