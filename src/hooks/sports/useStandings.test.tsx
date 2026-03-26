import { describe, it, expect } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'
import { useStandings } from './useStandings'
import { mockStandings } from '@/tests/mocks/data/standings.mock'

function createWrapper() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return function Wrapper({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
  }
}

describe('useStandings', () => {
  it('fetches and returns standings', async () => {
    const { result } = renderHook(() => useStandings({ leagueId: 39, season: '2023/24' }), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockStandings)
  })

  it('is disabled when leagueId is falsy', () => {
    const { result } = renderHook(() => useStandings({ leagueId: 0, season: '2023/24' }), {
      wrapper: createWrapper(),
    })

    expect(result.current.fetchStatus).toBe('idle')
  })
})
