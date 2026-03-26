import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('renders skeleton element', () => {
    render(<Skeleton />)
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('is aria-hidden', () => {
    render(<Skeleton />)
    expect(screen.getByTestId('skeleton')).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies text variant', () => {
    render(<Skeleton variant="text" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('h-4')
  })

  it('applies circle variant', () => {
    render(<Skeleton variant="circle" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('rounded-full')
  })

  it('applies card variant', () => {
    render(<Skeleton variant="card" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('rounded-xl')
  })

  it('applies width style', () => {
    render(<Skeleton width="200px" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ width: '200px' })
  })

  it('applies height style', () => {
    render(<Skeleton height="40px" />)
    expect(screen.getByTestId('skeleton')).toHaveStyle({ height: '40px' })
  })

  it('applies animate-pulse class', () => {
    render(<Skeleton />)
    expect(screen.getByTestId('skeleton')).toHaveClass('animate-pulse')
  })

  it('applies additional className', () => {
    render(<Skeleton className="extra" />)
    expect(screen.getByTestId('skeleton')).toHaveClass('extra')
  })
})
