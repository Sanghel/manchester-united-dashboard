import { type MouseEventHandler } from 'react'
import { cn } from '@/lib/utils'
import { Card } from '../Card'

export interface LeagueCardProps {
  /** League name */
  name: string
  /** League logo URL */
  logo?: string
  /** Country or region */
  country?: string
  /** Current season label */
  season?: string
  /** Number of teams */
  teamCount?: number
  /** Click handler */
  onClick?: MouseEventHandler<HTMLDivElement>
  /** Additional className */
  className?: string
}

/**
 * Card displaying a league or competition.
 *
 * @example
 * ```tsx
 * <LeagueCard
 *   name="Premier League"
 *   country="England"
 *   season="2024/25"
 *   teamCount={20}
 * />
 * ```
 */
export function LeagueCard({
  name,
  logo,
  country,
  season,
  teamCount,
  onClick,
  className,
}: LeagueCardProps) {
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
          <img src={logo} alt={`${name} logo`} className="w-10 h-10 object-contain flex-shrink-0" />
        ) : (
          <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-gray-600">
              {name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 truncate">{name}</p>
          {country && <p className="text-xs text-gray-500 truncate">{country}</p>}
        </div>

        {/* Meta */}
        <div className="flex-shrink-0 text-right">
          {season && <p className="text-xs font-medium text-gray-700">{season}</p>}
          {teamCount !== undefined && <p className="text-xs text-gray-400">{teamCount} teams</p>}
        </div>
      </div>
    </Card>
  )
}
