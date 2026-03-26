import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CardFooter } from './CardFooter'

describe('CardFooter', () => {
  it('renders children', () => {
    render(<CardFooter>footer content</CardFooter>)
    expect(screen.getByText('footer content')).toBeInTheDocument()
  })

  it('applies divider classes when divider prop is true', () => {
    const { container } = render(<CardFooter divider>content</CardFooter>)
    expect(container.firstChild).toHaveClass('border-t', 'border-gray-100')
  })

  it('does not apply divider by default', () => {
    const { container } = render(<CardFooter>content</CardFooter>)
    expect(container.firstChild).not.toHaveClass('border-t')
  })

  it('applies justify-start by default', () => {
    const { container } = render(<CardFooter>content</CardFooter>)
    expect(container.firstChild).toHaveClass('justify-start')
  })

  it('applies justify-end', () => {
    const { container } = render(<CardFooter justify="end">content</CardFooter>)
    expect(container.firstChild).toHaveClass('justify-end')
  })

  it('applies justify-center', () => {
    const { container } = render(<CardFooter justify="center">content</CardFooter>)
    expect(container.firstChild).toHaveClass('justify-center')
  })

  it('applies justify-between', () => {
    const { container } = render(<CardFooter justify="between">content</CardFooter>)
    expect(container.firstChild).toHaveClass('justify-between')
  })

  it('applies additional className', () => {
    const { container } = render(<CardFooter className="extra">content</CardFooter>)
    expect(container.firstChild).toHaveClass('extra')
  })

  it('forwards ref', () => {
    const ref = vi.fn()
    render(<CardFooter ref={ref}>content</CardFooter>)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
  })
})
