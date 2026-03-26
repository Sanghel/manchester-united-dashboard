import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmptyState } from './EmptyState'

describe('EmptyState', () => {
  it('renders title', () => {
    render(<EmptyState title="No matches found" />)
    expect(screen.getByText('No matches found')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<EmptyState title="No results" description="Try adjusting filters." />)
    expect(screen.getByText('Try adjusting filters.')).toBeInTheDocument()
  })

  it('renders icon', () => {
    render(<EmptyState title="Empty" icon={<span data-testid="icon">📭</span>} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders action', () => {
    render(<EmptyState title="Empty" action={<button>Clear Filters</button>} />)
    expect(screen.getByRole('button', { name: 'Clear Filters' })).toBeInTheDocument()
  })

  it('does not render description when absent', () => {
    const { container } = render(<EmptyState title="Empty" />)
    expect(container.querySelector('p')).toBeNull()
  })

  it('applies additional className', () => {
    const { container } = render(<EmptyState title="Empty" className="extra" />)
    expect(container.firstChild).toHaveClass('extra')
  })
})
