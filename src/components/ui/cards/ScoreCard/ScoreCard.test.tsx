import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { ScoreCard } from './ScoreCard'

const homeTeam = { name: 'Manchester United', abbreviation: 'MUN' }
const awayTeam = { name: 'Arsenal', abbreviation: 'ARS' }

describe('ScoreCard', () => {
  it('renders team names', () => {
    render(<ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="finished" />)
    expect(screen.getByText('MUN')).toBeInTheDocument()
    expect(screen.getByText('ARS')).toBeInTheDocument()
  })

  it('renders scores when provided', () => {
    render(
      <ScoreCard
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        homeScore={2}
        awayScore={1}
        status="finished"
      />
    )
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('renders LIVE status badge', () => {
    render(<ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="live" />)
    expect(screen.getByText('LIVE')).toBeInTheDocument()
  })

  it('renders FT status badge for finished', () => {
    render(<ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="finished" />)
    expect(screen.getByText('FT')).toBeInTheDocument()
  })

  it('renders Upcoming status badge', () => {
    render(<ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="upcoming" />)
    expect(screen.getByText('Upcoming')).toBeInTheDocument()
  })

  it('renders PPD status badge for postponed', () => {
    render(<ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="postponed" />)
    expect(screen.getByText('PPD')).toBeInTheDocument()
  })

  it('renders league name', () => {
    render(
      <ScoreCard
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        status="finished"
        league="Premier League"
      />
    )
    expect(screen.getByText('Premier League')).toBeInTheDocument()
  })

  it('renders time', () => {
    render(<ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="live" time="45'" />)
    expect(screen.getByText("45'")).toBeInTheDocument()
  })

  it('renders team logo when provided', () => {
    render(
      <ScoreCard
        homeTeam={{ name: 'Man Utd', logo: 'https://example.com/logo.png' }}
        awayTeam={awayTeam}
        status="upcoming"
      />
    )
    expect(screen.getByAltText('Man Utd logo')).toBeInTheDocument()
  })

  it('renders initials when no logo', () => {
    render(<ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="upcoming" />)
    // abbreviation initials used in the avatar circle
    expect(screen.getAllByText('MU').length).toBeGreaterThanOrEqual(1)
  })

  it('calls onClick when card is clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(
      <ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="finished" onClick={onClick} />
    )
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not have role=button when no onClick', () => {
    render(<ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="finished" />)
    expect(screen.queryByRole('button')).toBeNull()
  })

  it('applies additional className', () => {
    const { container } = render(
      <ScoreCard homeTeam={homeTeam} awayTeam={awayTeam} status="finished" className="extra" />
    )
    expect(container.firstChild).toHaveClass('extra')
  })
})
