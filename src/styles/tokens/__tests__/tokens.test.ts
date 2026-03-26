import { describe, it, expect } from 'vitest'
import { colors } from '../colors'
import { typography } from '../typography'
import { spacing } from '../spacing'

const HEX_COLOR_REGEX = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/

describe('Color tokens', () => {
  const expectedColorKeys: (keyof typeof colors)[] = [
    'mu-red-primary',
    'mu-red-secondary',
    'mu-gold',
    'bg-dark',
    'bg-card',
    'bg-sidebar',
    'text-primary',
    'text-secondary',
    'success-green',
    'warning-orange',
    'error-red',
  ]

  it('exports all expected color token keys', () => {
    expectedColorKeys.forEach((key) => {
      expect(colors).toHaveProperty(key)
    })
  })

  it('all color tokens are valid hex strings', () => {
    Object.entries(colors).forEach(([key, value]) => {
      expect(value, `Token "${key}" should be a valid hex color`).toMatch(HEX_COLOR_REGEX)
    })
  })

  it('has correct values for key MU brand colors', () => {
    expect(colors['mu-red-primary']).toBe('#DA291C')
    expect(colors['mu-gold']).toBe('#FFB81C')
    expect(colors['bg-sidebar']).toBe('#0E1117')
  })

  it('has exactly 11 color tokens', () => {
    expect(Object.keys(colors)).toHaveLength(11)
  })
})

describe('Typography tokens', () => {
  it('exports fontFamily with sans', () => {
    expect(typography.fontFamily).toHaveProperty('sans')
    expect(typography.fontFamily.sans).toContain('Inter')
  })

  it('exports fontSize with expected sizes', () => {
    const expectedSizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']
    expectedSizes.forEach((size) => {
      expect(typography.fontSize).toHaveProperty(size)
    })
  })

  it('all fontSize values are rem strings', () => {
    Object.entries(typography.fontSize).forEach(([key, value]) => {
      expect(value, `fontSize "${key}" should be a rem string`).toMatch(/rem$/)
    })
  })

  it('exports fontWeight with expected weights', () => {
    const expectedWeights = ['normal', 'medium', 'semibold', 'bold']
    expectedWeights.forEach((weight) => {
      expect(typography.fontWeight).toHaveProperty(weight)
    })
  })

  it('fontWeight values are numeric strings', () => {
    Object.entries(typography.fontWeight).forEach(([key, value]) => {
      expect(Number(value), `fontWeight "${key}" should be numeric`).not.toBeNaN()
    })
  })
})

describe('Spacing tokens', () => {
  it('exports spacing with key 0', () => {
    expect(spacing[0]).toBe('0')
  })

  it('exports expected spacing keys', () => {
    const expectedKeys = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20] as const
    expectedKeys.forEach((key) => {
      expect(spacing).toHaveProperty(String(key))
    })
  })

  it('non-zero spacing values are rem strings', () => {
    Object.entries(spacing).forEach(([key, value]) => {
      if (key !== '0') {
        expect(value, `spacing "${key}" should be a rem string`).toMatch(/rem$/)
      }
    })
  })

  it('has correct value for spacing 4 (base unit)', () => {
    expect(spacing[4]).toBe('1rem')
  })
})
