import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Divider } from './Divider'

describe('Divider', () => {
  it('renders a horizontal separator by default', () => {
    render(<Divider />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('renders an hr for horizontal', () => {
    const { container } = render(<Divider />)
    expect(container.querySelector('hr')).toBeInTheDocument()
  })

  it('renders a vertical separator', () => {
    render(<Divider orientation="vertical" />)
    const separator = screen.getByRole('separator')
    expect(separator).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('renders label text', () => {
    render(<Divider label="OR" />)
    expect(screen.getByText('OR')).toBeInTheDocument()
  })

  it('renders label divider as div with separator role', () => {
    render(<Divider label="OR" />)
    expect(screen.getByRole('separator')).toBeInTheDocument()
  })

  it('applies additional className', () => {
    render(<Divider className="extra" />)
    expect(screen.getByRole('separator')).toHaveClass('extra')
  })

  it('horizontal has border-t class', () => {
    render(<Divider />)
    expect(screen.getByRole('separator')).toHaveClass('border-t')
  })

  it('vertical has w-px class', () => {
    render(<Divider orientation="vertical" />)
    expect(screen.getByRole('separator')).toHaveClass('w-px')
  })
})
