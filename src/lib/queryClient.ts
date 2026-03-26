import { QueryClient } from '@tanstack/react-query'

/**
 * Global React Query client with opinionated defaults for a sports dashboard:
 * - staleTime: 30s (scores can change frequently)
 * - gcTime: 5min
 * - retry: 1 (fail fast for live data)
 * - refetchOnWindowFocus: true (re-sync when tab regains focus)
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: 0,
    },
  },
})
