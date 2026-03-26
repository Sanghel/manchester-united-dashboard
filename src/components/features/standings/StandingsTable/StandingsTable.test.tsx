import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'
import { StandingsTable } from './StandingsTable'

function wrapper({ children }: { children: ReactNode }) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

describe('StandingsTable', () => {
  it('shows spinner while loading', () => {
    render(<StandingsTable leagueId={39} season="2023/24" />, { wrapper })
    expect(screen.getByLabelText('Loading standings')).toBeDefined()
  })

  it('renders table after load', async () => {
    render(<StandingsTable leagueId={39} season="2023/24" highlightTeamId={33} />, { wrapper })
    await waitFor(() => screen.getByRole('table'))
    expect(screen.getByText('Manchester United')).toBeDefined()
  })

  it('highlights specified team row', async () => {
    render(<StandingsTable leagueId={39} season="2023/24" highlightTeamId={33} />, { wrapper })
    await waitFor(() => screen.getByRole('table'))
    const row = screen.getByText('Manchester United').closest('tr')
    expect(row?.getAttribute('aria-current')).toBe('true')
  })
})
