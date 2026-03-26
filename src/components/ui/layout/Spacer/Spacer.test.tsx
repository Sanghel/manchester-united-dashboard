import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Spacer } from './Spacer'

describe('Spacer', () => {
  it('renders an aria-hidden element', () => {
    const { container } = render(<Spacer />)
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies default md size', () => {
    const { container } = render(<Spacer />)
    expect(container.firstChild).toHaveClass('h-4', 'w-4')
  })

  it('applies xs size', () => {
    const { container } = render(<Spacer size="xs" />)
    expect(container.firstChild).toHaveClass('h-1', 'w-1')
  })

  it('applies xl size', () => {
    const { container } = render(<Spacer size="xl" />)
    expect(container.firstChild).toHaveClass('h-8', 'w-8')
  })

  it('applies 2xl size', () => {
    const { container } = render(<Spacer size="2xl" />)
    expect(container.firstChild).toHaveClass('h-12', 'w-12')
  })

  it('applies flex-grow when flex is true', () => {
    const { container } = render(<Spacer flex />)
    expect(container.firstChild).toHaveClass('flex-grow')
  })

  it('does not apply size classes when flex is true', () => {
    const { container } = render(<Spacer flex size="md" />)
    expect(container.firstChild).not.toHaveClass('h-4')
  })

  it('applies additional className', () => {
    const { container } = render(<Spacer className="extra" />)
    expect(container.firstChild).toHaveClass('extra')
  })
})
