/**
 * Utility functions for formatting sports data.
 */

/**
 * Formats a date string or Date object for display.
 *
 * @example
 * ```ts
 * formatDate('2024-03-15') // "Mar 15, 2024"
 * formatDate(new Date(), 'time') // "14:30"
 * formatDate(new Date(), 'short') // "Mar 15"
 * ```
 */
export function formatDate(
  date: string | Date,
  format: 'full' | 'short' | 'time' | 'relative' = 'full'
): string {
  const d = typeof date === 'string' ? new Date(date) : date

  if (isNaN(d.getTime())) return ''

  switch (format) {
    case 'time':
      return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    case 'short':
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    case 'relative': {
      const now = Date.now()
      const diff = now - d.getTime()
      const minutes = Math.floor(diff / 60000)
      const hours = Math.floor(diff / 3600000)
      const days = Math.floor(diff / 86400000)
      if (minutes < 1) return 'Just now'
      if (minutes < 60) return `${minutes}m ago`
      if (hours < 24) return `${hours}h ago`
      if (days < 7) return `${days}d ago`
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
    default:
      return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }
}

/**
 * Formats a match score for display.
 *
 * @example
 * ```ts
 * formatScore(2, 1) // "2 - 1"
 * formatScore(undefined, undefined) // "- : -"
 * formatScore(0, 0, ':') // "0 : 0"
 * ```
 */
export function formatScore(
  homeScore: number | undefined,
  awayScore: number | undefined,
  separator = '-'
): string {
  if (homeScore === undefined || awayScore === undefined) {
    return `- ${separator} -`
  }
  return `${homeScore} ${separator} ${awayScore}`
}

/**
 * Formats a league standing position with ordinal suffix.
 *
 * @example
 * ```ts
 * formatStanding(1) // "1st"
 * formatStanding(2) // "2nd"
 * formatStanding(3) // "3rd"
 * formatStanding(4) // "4th"
 * formatStanding(11) // "11th"
 * ```
 */
export function formatStanding(position: number): string {
  const mod10 = position % 10
  const mod100 = position % 100
  if (mod100 >= 11 && mod100 <= 13) return `${position}th`
  if (mod10 === 1) return `${position}st`
  if (mod10 === 2) return `${position}nd`
  if (mod10 === 3) return `${position}rd`
  return `${position}th`
}

/**
 * Formats a duration in seconds as mm:ss or hh:mm:ss.
 *
 * @example
 * ```ts
 * formatDuration(65) // "1:05"
 * formatDuration(3661) // "1:01:01"
 * formatDuration(90 * 60) // "90:00"
 * ```
 */
export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  const mm = String(m).padStart(h > 0 ? 2 : 1, '0')
  const ss = String(s).padStart(2, '0')

  if (h > 0) {
    return `${h}:${mm}:${ss}`
  }
  return `${mm}:${ss}`
}

/**
 * Formats a large number with K/M suffix.
 *
 * @example
 * ```ts
 * formatNumber(1500) // "1.5K"
 * formatNumber(2000000) // "2M"
 * formatNumber(999) // "999"
 * ```
 */
export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}K`
  return String(n)
}
