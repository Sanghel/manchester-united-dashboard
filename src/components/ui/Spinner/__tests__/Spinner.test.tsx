import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from '../Spinner'

describe('Spinner (MU atomic)', () => {
  describe('Rendering', () => {
    it('renders the status role element', () => {
      render(<Spinner />)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('renders with default label "Loading..."', () => {
      render(<Spinner />)
      expect(screen.getByRole('status', { name: 'Loading...' })).toBeInTheDocument()
    })

    it('renders with custom label', () => {
      render(<Spinner label="Fetching scores..." />)
      expect(screen.getByRole('status', { name: 'Fetching scores...' })).toBeInTheDocument()
    })

    it('spinner element is aria-hidden', () => {
      render(<Spinner />)
      expect(screen.getByTestId('spinner')).toHaveAttribute('aria-hidden', 'true')
    })
  })

  describe('Sizes', () => {
    it('renders sm size (16px / w-4 h-4)', () => {
      render(<Spinner size="sm" />)
      expect(screen.getByTestId('spinner')).toHaveClass('w-4', 'h-4')
    })

    it('renders md size (24px / w-6 h-6) by default', () => {
      render(<Spinner />)
      expect(screen.getByTestId('spinner')).toHaveClass('w-6', 'h-6')
    })

    it('renders lg size (32px / w-8 h-8)', () => {
      render(<Spinner size="lg" />)
      expect(screen.getByTestId('spinner')).toHaveClass('w-8', 'h-8')
    })
  })

  describe('Color', () => {
    it('applies MU red (#DA291C) as default border color via style attribute', () => {
      render(<Spinner />)
      const spinner = screen.getByTestId('spinner')
      // happy-dom does not resolve shorthand borderColor in getComputedStyle,
      // so we inspect the raw style attribute string instead.
      expect(spinner.getAttribute('style')).toContain('#DA291C')
    })

    it('applies custom color via style attribute', () => {
      render(<Spinner color="#FFB81C" />)
      const spinner = screen.getByTestId('spinner')
      expect(spinner.getAttribute('style')).toContain('#FFB81C')
    })
  })

  describe('Animation', () => {
    it('applies animate-spin class', () => {
      render(<Spinner />)
      expect(screen.getByTestId('spinner')).toHaveClass('animate-spin')
    })
  })

  describe('Custom className', () => {
    it('merges additional className onto the wrapper', () => {
      render(<Spinner className="extra" />)
      expect(screen.getByRole('status')).toHaveClass('extra')
    })
  })
})
