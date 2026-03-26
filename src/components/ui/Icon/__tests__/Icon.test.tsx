import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trophy, Activity, Settings } from 'lucide-react'
import { Icon } from '../Icon'

describe('Icon (MU atomic)', () => {
  describe('Rendering', () => {
    it('renders a lucide icon', () => {
      render(<Icon name={Trophy} aria-label="Trophy" />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('renders different icon components', () => {
      const icons = [Trophy, Activity, Settings]
      icons.forEach((IconComp) => {
        const { unmount } = render(<Icon name={IconComp} aria-label="icon" />)
        expect(screen.getByTestId('icon')).toBeInTheDocument()
        unmount()
      })
    })
  })

  describe('Size prop', () => {
    it('defaults to size 20', () => {
      render(<Icon name={Trophy} aria-label="Trophy" />)
      const el = screen.getByTestId('icon')
      expect(el).toHaveAttribute('width', '20')
      expect(el).toHaveAttribute('height', '20')
    })

    it('applies custom size', () => {
      render(<Icon name={Trophy} size={32} aria-label="Trophy" />)
      const el = screen.getByTestId('icon')
      expect(el).toHaveAttribute('width', '32')
      expect(el).toHaveAttribute('height', '32')
    })
  })

  describe('Color prop', () => {
    it('applies color via stroke attribute', () => {
      render(<Icon name={Trophy} color="#FFB81C" aria-label="Trophy" />)
      const el = screen.getByTestId('icon')
      expect(el).toHaveAttribute('stroke', '#FFB81C')
    })
  })

  describe('Accessibility', () => {
    it('is aria-hidden when no aria-label provided', () => {
      render(<Icon name={Trophy} />)
      const el = screen.getByTestId('icon')
      expect(el).toHaveAttribute('aria-hidden', 'true')
    })

    it('exposes aria-label when provided', () => {
      render(<Icon name={Trophy} aria-label="Win trophy" />)
      const el = screen.getByTestId('icon')
      expect(el).toHaveAttribute('aria-label', 'Win trophy')
    })
  })

  describe('Custom className', () => {
    it('merges additional className', () => {
      render(<Icon name={Trophy} className="extra" aria-label="Trophy" />)
      expect(screen.getByTestId('icon')).toHaveClass('extra')
    })
  })
})
