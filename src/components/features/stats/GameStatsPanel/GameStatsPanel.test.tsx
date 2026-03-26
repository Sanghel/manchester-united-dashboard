import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'
import { GameStatsPanel } from './GameStatsPanel'

function wrapper({ children }: { children: ReactNode }) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

describe('GameStatsPanel', () => {
  it('shows spinner while loading', () => {
    render(<GameStatsPanel matchId={1} />, { wrapper })
    expect(screen.getByLabelText('Loading match stats')).toBeDefined()
  })

  it('renders stats after load', async () => {
    render(<GameStatsPanel matchId={1} homeTeamName="Man Utd" awayTeamName="Chelsea" />, {
      wrapper,
    })
    await waitFor(() => screen.getByRole('region', { name: 'Match statistics' }))
    expect(screen.getByText('Possession')).toBeDefined()
    expect(screen.getByText('Man Utd')).toBeDefined()
  })

  it('shows error state for unknown match', async () => {
    render(<GameStatsPanel matchId={9999} />, { wrapper })
    await waitFor(() => screen.getByText('Stats not available'))
  })
})
