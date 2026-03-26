import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Active</Badge>)
    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('applies default variant classes', () => {
    const { container } = render(<Badge>text</Badge>)
    expect(container.firstChild).toHaveClass('bg-gray-100', 'text-gray-700')
  })

  it('applies success variant', () => {
    const { container } = render(<Badge variant="success">OK</Badge>)
    expect(container.firstChild).toHaveClass('bg-green-100', 'text-green-700')
  })

  it('applies danger variant', () => {
    const { container } = render(<Badge variant="danger">Error</Badge>)
    expect(container.firstChild).toHaveClass('bg-red-100', 'text-red-700')
  })

  it('applies warning variant', () => {
    const { container } = render(<Badge variant="warning">Warn</Badge>)
    expect(container.firstChild).toHaveClass('bg-yellow-100', 'text-yellow-700')
  })

  it('applies info variant', () => {
    const { container } = render(<Badge variant="info">Info</Badge>)
    expect(container.firstChild).toHaveClass('bg-blue-100', 'text-blue-700')
  })

  it('applies primary variant', () => {
    const { container } = render(<Badge variant="primary">Label</Badge>)
    expect(container.firstChild).toHaveClass('bg-primary-100', 'text-primary-700')
  })

  it('applies md size', () => {
    const { container } = render(<Badge size="md">text</Badge>)
    expect(container.firstChild).toHaveClass('px-2.5')
  })

  it('applies lg size', () => {
    const { container } = render(<Badge size="lg">text</Badge>)
    expect(container.firstChild).toHaveClass('px-3')
  })

  it('applies additional className', () => {
    const { container } = render(<Badge className="extra">text</Badge>)
    expect(container.firstChild).toHaveClass('extra')
  })
})
