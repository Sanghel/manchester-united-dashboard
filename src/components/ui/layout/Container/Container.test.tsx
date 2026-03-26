import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Container } from './Container'

describe('Container', () => {
  it('renders children', () => {
    render(<Container>content</Container>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('applies default xl max-width', () => {
    const { container } = render(<Container>content</Container>)
    expect(container.firstChild).toHaveClass('max-w-screen-xl')
  })

  it('applies lg max-width', () => {
    const { container } = render(<Container maxWidth="lg">content</Container>)
    expect(container.firstChild).toHaveClass('max-w-screen-lg')
  })

  it('applies sm max-width', () => {
    const { container } = render(<Container maxWidth="sm">content</Container>)
    expect(container.firstChild).toHaveClass('max-w-screen-sm')
  })

  it('applies full max-width', () => {
    const { container } = render(<Container maxWidth="full">content</Container>)
    expect(container.firstChild).toHaveClass('max-w-full')
  })

  it('applies 2xl max-width', () => {
    const { container } = render(<Container maxWidth="2xl">content</Container>)
    expect(container.firstChild).toHaveClass('max-w-screen-2xl')
  })

  it('applies centering and padding classes', () => {
    const { container } = render(<Container>content</Container>)
    expect(container.firstChild).toHaveClass('mx-auto', 'px-4', 'w-full')
  })

  it('applies additional className', () => {
    const { container } = render(<Container className="extra">content</Container>)
    expect(container.firstChild).toHaveClass('extra')
  })

  it('forwards ref', () => {
    const ref = vi.fn()
    render(<Container ref={ref}>content</Container>)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
  })
})
