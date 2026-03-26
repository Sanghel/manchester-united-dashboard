import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CardBody } from './CardBody'

describe('CardBody', () => {
  it('renders children', () => {
    render(<CardBody>body content</CardBody>)
    expect(screen.getByText('body content')).toBeInTheDocument()
  })

  it('applies default padding', () => {
    const { container } = render(<CardBody>content</CardBody>)
    expect(container.firstChild).toHaveClass('p-5')
  })

  it('applies compact padding', () => {
    const { container } = render(<CardBody compact>content</CardBody>)
    expect(container.firstChild).toHaveClass('px-5', 'py-3')
  })

  it('removes padding when noPadding is true', () => {
    const { container } = render(<CardBody noPadding>content</CardBody>)
    expect(container.firstChild).not.toHaveClass('p-5')
    expect(container.firstChild).not.toHaveClass('px-5')
  })

  it('applies overflow class when maxHeight is set', () => {
    const { container } = render(<CardBody maxHeight="200px">content</CardBody>)
    expect(container.firstChild).toHaveClass('overflow-y-auto')
  })

  it('applies maxHeight style', () => {
    const { container } = render(<CardBody maxHeight="200px">content</CardBody>)
    expect(container.firstChild).toHaveStyle({ maxHeight: '200px' })
  })

  it('applies additional className', () => {
    const { container } = render(<CardBody className="extra">content</CardBody>)
    expect(container.firstChild).toHaveClass('extra')
  })

  it('forwards ref', () => {
    const ref = vi.fn()
    render(<CardBody ref={ref}>content</CardBody>)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
  })
})
