import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CardHeader } from './CardHeader'

describe('CardHeader', () => {
  it('renders title', () => {
    render(<CardHeader title="My Title" />)
    expect(screen.getByText('My Title')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<CardHeader title="Title" subtitle="Sub text" />)
    expect(screen.getByText('Sub text')).toBeInTheDocument()
  })

  it('renders avatar slot', () => {
    render(<CardHeader title="T" avatar={<span data-testid="avatar">A</span>} />)
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
  })

  it('renders actions slot', () => {
    render(<CardHeader title="T" actions={<button>Edit</button>} />)
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument()
  })

  it('renders children', () => {
    render(<CardHeader>child content</CardHeader>)
    expect(screen.getByText('child content')).toBeInTheDocument()
  })

  it('does not render title/subtitle section when both absent', () => {
    const { container } = render(<CardHeader />)
    expect(container.querySelector('h3')).toBeNull()
    expect(container.querySelector('p')).toBeNull()
  })

  it('applies additional className', () => {
    const { container } = render(<CardHeader className="extra" />)
    expect(container.firstChild).toHaveClass('extra')
  })

  it('forwards ref', () => {
    const ref = vi.fn()
    render(<CardHeader ref={ref} />)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
  })
})
