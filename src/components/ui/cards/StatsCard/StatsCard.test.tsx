import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsCard } from './StatsCard'

describe('StatsCard', () => {
  it('renders label and value', () => {
    render(<StatsCard label="Goals" value={42} />)
    expect(screen.getByText('Goals')).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('renders string value', () => {
    render(<StatsCard label="Win Rate" value="68%" />)
    expect(screen.getByText('68%')).toBeInTheDocument()
  })

  it('renders subValue', () => {
    render(<StatsCard label="Distance" value={10.5} subValue="km" />)
    expect(screen.getByText('km')).toBeInTheDocument()
  })

  it('renders trend up with label', () => {
    render(<StatsCard label="Goals" value={10} trend="up" trendLabel="+3 this month" />)
    expect(screen.getByText('+3 this month')).toBeInTheDocument()
    const trendEl = screen.getByLabelText('Trend: up')
    expect(trendEl).toBeInTheDocument()
  })

  it('renders trend down with label', () => {
    render(<StatsCard label="Goals" value={10} trend="down" trendLabel="-2 this month" />)
    expect(screen.getByLabelText('Trend: down')).toBeInTheDocument()
  })

  it('renders trend neutral', () => {
    render(<StatsCard label="Goals" value={10} trend="neutral" trendLabel="no change" />)
    expect(screen.getByLabelText('Trend: neutral')).toBeInTheDocument()
  })

  it('does not render trend section when no trend', () => {
    render(<StatsCard label="Goals" value={10} />)
    expect(screen.queryByLabelText(/Trend/)).toBeNull()
  })

  it('renders description', () => {
    render(<StatsCard label="Goals" value={10} description="Total goals this season" />)
    expect(screen.getByText('Total goals this season')).toBeInTheDocument()
  })

  it('renders icon', () => {
    render(<StatsCard label="Goals" value={10} icon={<span data-testid="icon">⚽</span>} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('applies additional className', () => {
    const { container } = render(<StatsCard label="Goals" value={10} className="extra" />)
    expect(container.firstChild).toHaveClass('extra')
  })
})
