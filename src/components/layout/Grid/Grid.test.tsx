import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Grid } from './Grid'

describe('Grid', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Grid>
        <div>item</div>
      </Grid>
    )
    expect(getByText('item')).toBeInTheDocument()
  })

  it('applies grid class by default', () => {
    const { container } = render(
      <Grid>
        <div />
      </Grid>
    )
    expect(container.firstChild).toHaveClass('grid')
  })

  it('applies single column by default', () => {
    const { container } = render(
      <Grid>
        <div />
      </Grid>
    )
    expect(container.firstChild).toHaveClass('grid-cols-1')
  })

  it('applies 2-column responsive classes', () => {
    const { container } = render(
      <Grid cols={2}>
        <div />
      </Grid>
    )
    expect(container.firstChild).toHaveClass('grid-cols-1')
    expect(container.firstChild).toHaveClass('md:grid-cols-2')
  })

  it('applies 3-column responsive classes', () => {
    const { container } = render(
      <Grid cols={3}>
        <div />
      </Grid>
    )
    expect(container.firstChild).toHaveClass('grid-cols-1')
    expect(container.firstChild).toHaveClass('md:grid-cols-2')
    expect(container.firstChild).toHaveClass('lg:grid-cols-3')
  })

  it('applies 4-column responsive classes', () => {
    const { container } = render(
      <Grid cols={4}>
        <div />
      </Grid>
    )
    expect(container.firstChild).toHaveClass('grid-cols-1')
    expect(container.firstChild).toHaveClass('md:grid-cols-2')
    expect(container.firstChild).toHaveClass('lg:grid-cols-4')
  })

  it('applies sm gap class', () => {
    const { container } = render(
      <Grid gap="sm">
        <div />
      </Grid>
    )
    expect(container.firstChild).toHaveClass('gap-2')
  })

  it('applies md gap class by default', () => {
    const { container } = render(
      <Grid>
        <div />
      </Grid>
    )
    expect(container.firstChild).toHaveClass('gap-4')
  })

  it('applies lg gap class', () => {
    const { container } = render(
      <Grid gap="lg">
        <div />
      </Grid>
    )
    expect(container.firstChild).toHaveClass('gap-6')
  })

  it('applies additional className', () => {
    const { container } = render(
      <Grid className="extra">
        <div />
      </Grid>
    )
    expect(container.firstChild).toHaveClass('extra')
  })
})
