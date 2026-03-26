import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with default label', () => {
    render(<Spinner />)
    expect(screen.getByRole('status', { name: 'Loading...' })).toBeInTheDocument()
  })

  it('renders with custom label', () => {
    render(<Spinner label="Fetching scores..." />)
    expect(screen.getByRole('status', { name: 'Fetching scores...' })).toBeInTheDocument()
  })

  it('applies size classes', () => {
    const { container } = render(<Spinner size="lg" />)
    expect(container.querySelector('[aria-hidden="true"]')).toHaveClass('w-8', 'h-8')
  })

  it('applies xs size', () => {
    const { container } = render(<Spinner size="xs" />)
    expect(container.querySelector('[aria-hidden="true"]')).toHaveClass('w-3', 'h-3')
  })

  it('applies xl size', () => {
    const { container } = render(<Spinner size="xl" />)
    expect(container.querySelector('[aria-hidden="true"]')).toHaveClass('w-12', 'h-12')
  })

  it('applies color classes', () => {
    const { container } = render(<Spinner color="white" />)
    expect(container.querySelector('[aria-hidden="true"]')).toHaveClass('text-white')
  })

  it('applies additional className', () => {
    render(<Spinner className="extra" />)
    expect(screen.getByRole('status')).toHaveClass('extra')
  })

  it('spinner element is aria-hidden', () => {
    const { container } = render(<Spinner />)
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })
})
