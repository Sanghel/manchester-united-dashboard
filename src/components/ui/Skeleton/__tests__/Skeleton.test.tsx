import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skeleton } from '../Skeleton'

describe('Skeleton (MU atomic)', () => {
  describe('Rendering', () => {
    it('renders a skeleton element', () => {
      render(<Skeleton />)
      expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    })

    it('is aria-hidden', () => {
      render(<Skeleton />)
      expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true')
    })

    it('applies MU card background color class', () => {
      render(<Skeleton />)
      expect(screen.getByTestId('skeleton')).toHaveClass('bg-[#2A2A2A]')
    })

    it('applies animate pulse class', () => {
      render(<Skeleton />)
      // The class uses a custom animation value
      const el = screen.getByTestId('skeleton')
      expect(el.className).toMatch(/animate/)
    })
  })

  describe('Variants', () => {
    it('applies text variant', () => {
      render(<Skeleton variant="text" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('h-4')
    })

    it('applies avatar variant — fully rounded', () => {
      render(<Skeleton variant="avatar" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('rounded-full')
    })

    it('applies card variant — extra rounding', () => {
      render(<Skeleton variant="card" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('rounded-xl')
    })

    it('applies rect variant — default rounding', () => {
      render(<Skeleton variant="rect" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('rounded')
    })
  })

  describe('Count prop (text variant)', () => {
    it('renders count=1 as a single element by default', () => {
      render(<Skeleton variant="text" />)
      expect(screen.getAllByTestId('skeleton')).toHaveLength(1)
    })

    it('renders multiple skeleton rows when count > 1', () => {
      render(<Skeleton variant="text" count={3} />)
      expect(screen.getAllByTestId('skeleton')).toHaveLength(3)
    })

    it('renders a skeleton-group wrapper when count > 1', () => {
      render(<Skeleton variant="text" count={3} />)
      expect(screen.getByTestId('skeleton-group')).toBeInTheDocument()
    })

    it('makes the last row shorter (3/4 width) for a natural look', () => {
      render(<Skeleton variant="text" count={2} />)
      const rows = screen.getAllByTestId('skeleton')
      expect(rows[rows.length - 1]).toHaveClass('w-3/4')
    })
  })

  describe('Dimensions', () => {
    it('applies width style', () => {
      render(<Skeleton width="200px" />)
      expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '200px' })
    })

    it('applies height style', () => {
      render(<Skeleton height="60px" />)
      expect(screen.getByTestId('skeleton')).toHaveStyle({ height: '60px' })
    })
  })

  describe('Custom className', () => {
    it('merges additional className', () => {
      render(<Skeleton className="extra" />)
      expect(screen.getByTestId('skeleton')).toHaveClass('extra')
    })
  })
})
