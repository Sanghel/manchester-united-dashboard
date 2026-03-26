import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { LeagueCard } from './LeagueCard'

describe('LeagueCard', () => {
  it('renders league name', () => {
    render(<LeagueCard name="Premier League" />)
    expect(screen.getByText('Premier League')).toBeInTheDocument()
  })

  it('renders country', () => {
    render(<LeagueCard name="Premier League" country="England" />)
    expect(screen.getByText('England')).toBeInTheDocument()
  })

  it('renders season', () => {
    render(<LeagueCard name="Premier League" season="2024/25" />)
    expect(screen.getByText('2024/25')).toBeInTheDocument()
  })

  it('renders teamCount', () => {
    render(<LeagueCard name="Premier League" teamCount={20} />)
    expect(screen.getByText('20 teams')).toBeInTheDocument()
  })

  it('renders logo when provided', () => {
    render(<LeagueCard name="Premier League" logo="https://example.com/logo.png" />)
    expect(screen.getByAltText('Premier League logo')).toBeInTheDocument()
  })

  it('renders initials when no logo', () => {
    render(<LeagueCard name="Premier League" />)
    expect(screen.getByText('PR')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<LeagueCard name="Premier League" onClick={onClick} />)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not have role=button when no onClick', () => {
    render(<LeagueCard name="Premier League" />)
    expect(screen.queryByRole('button')).toBeNull()
  })

  it('applies additional className', () => {
    const { container } = render(<LeagueCard name="Premier League" className="extra" />)
    expect(container.firstChild).toHaveClass('extra')
  })
})
