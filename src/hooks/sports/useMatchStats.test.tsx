import { describe, it, expect } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'
import { useMatchStats } from './useMatchStats'
import { mockStats } from '@/tests/mocks/data/stats.mock'

function createWrapper() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return function Wrapper({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
  }
}

describe('useMatchStats', () => {
  it('fetches stats for a known match', async () => {
    const { result } = renderHook(() => useMatchStats(1), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockStats)
  })

  it('is disabled when matchId is 0', () => {
    const { result } = renderHook(() => useMatchStats(0), { wrapper: createWrapper() })

    expect(result.current.fetchStatus).toBe('idle')
  })
})
