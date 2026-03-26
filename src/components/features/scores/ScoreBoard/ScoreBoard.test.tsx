import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'
import { ScoreBoard } from './ScoreBoard'

function wrapper({ children }: { children: ReactNode }) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

describe('ScoreBoard', () => {
  it('shows spinner while loading', () => {
    render(<ScoreBoard />, { wrapper })
    expect(screen.getByLabelText('Loading scores')).toBeDefined()
  })

  it('renders match cards after load', async () => {
    render(<ScoreBoard />, { wrapper })
    await waitFor(() => screen.getByLabelText('Score board'))
    // At least one team name should be visible
    expect(screen.getAllByText('Premier League').length).toBeGreaterThan(0)
  })

  it('calls onMatchClick when a score card is clicked', async () => {
    const handler = vi.fn()
    render(<ScoreBoard onMatchClick={handler} />, { wrapper })
    await waitFor(() => screen.getByLabelText('Score board'))
    screen.getAllByRole('button')[0].click()
    expect(handler).toHaveBeenCalledWith(expect.any(Number))
  })
})
