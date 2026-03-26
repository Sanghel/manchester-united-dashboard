import { useQuery } from '@tanstack/react-query'
import { getMatchStats } from '@/services/sports'

export const matchStatsKeys = {
  all: ['stats'] as const,
  detail: (matchId: number) => ['stats', matchId] as const,
}

export function useMatchStats(matchId: number) {
  return useQuery({
    queryKey: matchStatsKeys.detail(matchId),
    queryFn: () => getMatchStats(matchId),
    enabled: matchId > 0,
  })
}
