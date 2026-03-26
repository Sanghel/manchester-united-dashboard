import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Grid } from './Grid'

describe('Grid', () => {
  it('renders children', () => {
    render(<Grid>content</Grid>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('applies grid class', () => {
    const { container } = render(<Grid>content</Grid>)
    expect(container.firstChild).toHaveClass('grid')
  })

  it('applies default 1 col and md gap', () => {
    const { container } = render(<Grid>content</Grid>)
    expect(container.firstChild).toHaveClass('grid-cols-1', 'gap-4')
  })

  it('applies 3 cols', () => {
    const { container } = render(<Grid cols={3}>content</Grid>)
    expect(container.firstChild).toHaveClass('grid-cols-3')
  })

  it('applies 12 cols', () => {
    const { container } = render(<Grid cols={12}>content</Grid>)
    expect(container.firstChild).toHaveClass('grid-cols-12')
  })

  it('applies sm gap', () => {
    const { container } = render(<Grid gap="sm">content</Grid>)
    expect(container.firstChild).toHaveClass('gap-2')
  })

  it('applies xl gap', () => {
    const { container } = render(<Grid gap="xl">content</Grid>)
    expect(container.firstChild).toHaveClass('gap-8')
  })

  it('applies no gap', () => {
    const { container } = render(<Grid gap="none">content</Grid>)
    expect(container.firstChild).not.toHaveClass('gap-4')
  })

  it('applies additional className', () => {
    const { container } = render(<Grid className="extra">content</Grid>)
    expect(container.firstChild).toHaveClass('extra')
  })

  it('forwards ref', () => {
    const ref = vi.fn()
    render(<Grid ref={ref}>content</Grid>)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
  })
})
