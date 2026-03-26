import { useQuery } from '@tanstack/react-query'
import { getLeagues } from '@/services/sports'

export const leaguesKeys = {
  all: ['leagues'] as const,
}

export function useLeagues() {
  return useQuery({
    queryKey: leaguesKeys.all,
    queryFn: getLeagues,
    staleTime: 10 * 60 * 1000, // leagues change rarely — 10 min
  })
}
