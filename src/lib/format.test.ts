import { describe, it, expect } from 'vitest'
import { formatDate, formatScore, formatStanding, formatDuration, formatNumber } from './format'

describe('formatDate', () => {
  it('formats full date by default', () => {
    // Use local Date constructor to avoid UTC timezone offset issues
    const result = formatDate(new Date(2024, 2, 15), 'full')
    expect(result).toMatch(/Mar 15, 2024/)
  })

  it('formats short date', () => {
    const result = formatDate(new Date(2024, 2, 15), 'short')
    expect(result).toMatch(/Mar 15/)
  })

  it('formats time', () => {
    const d = new Date('2024-03-15T14:30:00')
    const result = formatDate(d, 'time')
    expect(result).toMatch(/14:30/)
  })

  it('formats relative: just now', () => {
    const result = formatDate(new Date(), 'relative')
    expect(result).toBe('Just now')
  })

  it('formats relative: minutes ago', () => {
    const d = new Date(Date.now() - 5 * 60 * 1000)
    const result = formatDate(d, 'relative')
    expect(result).toBe('5m ago')
  })

  it('formats relative: hours ago', () => {
    const d = new Date(Date.now() - 3 * 3600 * 1000)
    const result = formatDate(d, 'relative')
    expect(result).toBe('3h ago')
  })

  it('formats relative: days ago', () => {
    const d = new Date(Date.now() - 2 * 86400 * 1000)
    const result = formatDate(d, 'relative')
    expect(result).toBe('2d ago')
  })

  it('returns empty string for invalid date', () => {
    expect(formatDate('invalid-date')).toBe('')
  })

  it('accepts Date object', () => {
    const result = formatDate(new Date(2024, 2, 15), 'short')
    expect(result).toMatch(/Mar 15/)
  })
})

describe('formatScore', () => {
  it('formats score with default separator', () => {
    expect(formatScore(2, 1)).toBe('2 - 1')
  })

  it('formats score with custom separator', () => {
    expect(formatScore(2, 1, ':')).toBe('2 : 1')
  })

  it('shows placeholders when scores are undefined', () => {
    expect(formatScore(undefined, undefined)).toBe('- - -')
  })

  it('formats 0-0 score', () => {
    expect(formatScore(0, 0)).toBe('0 - 0')
  })
})

describe('formatStanding', () => {
  it('formats 1st', () => expect(formatStanding(1)).toBe('1st'))
  it('formats 2nd', () => expect(formatStanding(2)).toBe('2nd'))
  it('formats 3rd', () => expect(formatStanding(3)).toBe('3rd'))
  it('formats 4th', () => expect(formatStanding(4)).toBe('4th'))
  it('formats 11th', () => expect(formatStanding(11)).toBe('11th'))
  it('formats 12th', () => expect(formatStanding(12)).toBe('12th'))
  it('formats 13th', () => expect(formatStanding(13)).toBe('13th'))
  it('formats 21st', () => expect(formatStanding(21)).toBe('21st'))
  it('formats 22nd', () => expect(formatStanding(22)).toBe('22nd'))
})

describe('formatDuration', () => {
  it('formats seconds under a minute', () => {
    expect(formatDuration(45)).toBe('0:45')
  })

  it('formats 1 minute 5 seconds', () => {
    expect(formatDuration(65)).toBe('1:05')
  })

  it('formats 90 minutes as hours format', () => {
    expect(formatDuration(90 * 60)).toBe('1:30:00')
  })

  it('formats hours when >= 1 hour', () => {
    expect(formatDuration(3661)).toBe('1:01:01')
  })
})

describe('formatNumber', () => {
  it('formats numbers under 1000 as-is', () => {
    expect(formatNumber(999)).toBe('999')
  })

  it('formats thousands as K', () => {
    expect(formatNumber(1500)).toBe('1.5K')
  })

  it('formats even thousands without decimal', () => {
    expect(formatNumber(2000)).toBe('2K')
  })

  it('formats millions as M', () => {
    expect(formatNumber(2000000)).toBe('2M')
  })

  it('formats millions with decimal', () => {
    expect(formatNumber(1500000)).toBe('1.5M')
  })
})
