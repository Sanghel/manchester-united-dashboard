import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Card } from './Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies default variant classes', () => {
    const { container } = render(<Card>content</Card>)
    expect(container.firstChild).toHaveClass('border', 'border-gray-200')
  })

  it('applies elevated variant', () => {
    const { container } = render(<Card variant="elevated">content</Card>)
    expect(container.firstChild).toHaveClass('shadow-md')
  })

  it('applies outlined variant', () => {
    const { container } = render(<Card variant="outlined">content</Card>)
    expect(container.firstChild).toHaveClass('border-2', 'border-gray-300')
  })

  it('applies interactive variant', () => {
    const { container } = render(<Card variant="interactive">content</Card>)
    expect(container.firstChild).toHaveClass('cursor-pointer')
  })

  it('applies padding sizes', () => {
    const { container } = render(<Card padding="md">content</Card>)
    expect(container.firstChild).toHaveClass('p-5')
  })

  it('applies hoverable prop', () => {
    const { container } = render(<Card hoverable>content</Card>)
    expect(container.firstChild).toHaveClass('cursor-pointer')
  })

  it('applies additional className', () => {
    const { container } = render(<Card className="custom-class">content</Card>)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('calls onClick handler', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Card onClick={onClick}>click me</Card>)
    await user.click(screen.getByText('click me'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('forwards ref', () => {
    const ref = vi.fn()
    render(<Card ref={ref}>content</Card>)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
  })
})
