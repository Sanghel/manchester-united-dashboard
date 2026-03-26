import { describe, it, expect } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode } from 'react'
import { useLeagues } from './useLeagues'
import { mockLeagues } from '@/tests/mocks/data/leagues.mock'

function createWrapper() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return function Wrapper({ children }: { children: ReactNode }) {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
  }
}

describe('useLeagues', () => {
  it('fetches and returns leagues', async () => {
    const { result } = renderHook(() => useLeagues(), { wrapper: createWrapper() })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual(mockLeagues)
    expect(result.current.data?.length).toBeGreaterThan(0)
  })
})
