import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '../Badge'

describe('Badge (MU atomic)', () => {
  describe('Rendering', () => {
    it('renders children text', () => {
      render(<Badge>WIN</Badge>)
      expect(screen.getByText('WIN')).toBeInTheDocument()
    })

    it('renders as a span element', () => {
      const { container } = render(<Badge>text</Badge>)
      expect(container.firstChild?.nodeName).toBe('SPAN')
    })
  })

  describe('Variants', () => {
    it('applies win variant — success green', () => {
      const { container } = render(<Badge variant="win">WIN</Badge>)
      expect(container.firstChild).toHaveClass('bg-[#10B981]', 'text-white')
    })

    it('applies draw variant — warning orange', () => {
      const { container } = render(<Badge variant="draw">DRAW</Badge>)
      expect(container.firstChild).toHaveClass('bg-[#F59E0B]', 'text-white')
    })

    it('applies loss variant — error red', () => {
      const { container } = render(<Badge variant="loss">LOSS</Badge>)
      expect(container.firstChild).toHaveClass('bg-[#EF4444]', 'text-white')
    })

    it('applies default variant — dark bg', () => {
      const { container } = render(<Badge variant="default">Premier League</Badge>)
      expect(container.firstChild).toHaveClass('bg-[#2A2A2A]', 'text-white')
    })

    it('applies gold variant — MU gold on dark text', () => {
      const { container } = render(<Badge variant="gold">Top 4</Badge>)
      expect(container.firstChild).toHaveClass('bg-[#FFB81C]', 'text-[#1A1A1A]')
    })

    it('renders all variants without errors', () => {
      const variants = ['win', 'draw', 'loss', 'default', 'gold'] as const
      variants.forEach((variant) => {
        const { unmount } = render(<Badge variant={variant}>{variant}</Badge>)
        expect(screen.getByText(variant)).toBeInTheDocument()
        unmount()
      })
    })
  })

  describe('Sizes', () => {
    it('applies sm size by default', () => {
      const { container } = render(<Badge>text</Badge>)
      expect(container.firstChild).toHaveClass('text-xs', 'px-2')
    })

    it('applies md size', () => {
      const { container } = render(<Badge size="md">text</Badge>)
      expect(container.firstChild).toHaveClass('text-sm', 'px-2.5')
    })
  })

  describe('Custom className', () => {
    it('merges additional className', () => {
      const { container } = render(<Badge className="extra">text</Badge>)
      expect(container.firstChild).toHaveClass('extra')
    })
  })
})
