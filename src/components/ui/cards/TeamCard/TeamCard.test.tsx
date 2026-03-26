import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { TeamCard } from './TeamCard'

describe('TeamCard', () => {
  it('renders team name', () => {
    render(<TeamCard name="Manchester United" />)
    expect(screen.getByText('Manchester United')).toBeInTheDocument()
  })

  it('renders league', () => {
    render(<TeamCard name="Manchester United" league="Premier League" />)
    expect(screen.getByText('Premier League')).toBeInTheDocument()
  })

  it('renders record', () => {
    render(<TeamCard name="Team" record="22W 8L 5D" />)
    expect(screen.getByText('22W 8L 5D')).toBeInTheDocument()
  })

  it('renders position', () => {
    render(<TeamCard name="Team" position={3} />)
    expect(screen.getByText('#3')).toBeInTheDocument()
  })

  it('renders points', () => {
    render(<TeamCard name="Team" points={58} />)
    expect(screen.getByText('58 pts')).toBeInTheDocument()
  })

  it('renders logo when provided', () => {
    render(<TeamCard name="Manchester United" logo="https://example.com/logo.png" />)
    expect(screen.getByAltText('Manchester United logo')).toBeInTheDocument()
  })

  it('renders abbreviation initials when no logo', () => {
    render(<TeamCard name="Manchester United" abbreviation="MUN" />)
    expect(screen.getByText('MUN')).toBeInTheDocument()
  })

  it('uses first 3 chars of name when no abbreviation and no logo', () => {
    render(<TeamCard name="Arsenal" />)
    expect(screen.getByText('ARS')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<TeamCard name="Team" onClick={onClick} />)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not have role=button when no onClick', () => {
    render(<TeamCard name="Team" />)
    expect(screen.queryByRole('button')).toBeNull()
  })

  it('applies additional className', () => {
    const { container } = render(<TeamCard name="Team" className="extra" />)
    expect(container.firstChild).toHaveClass('extra')
  })
})
