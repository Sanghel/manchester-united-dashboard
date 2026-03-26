import { useQuery } from '@tanstack/react-query'
import { getScores } from '@/services/sports'
import type { ScoresParams } from '@/services/sports'

export const scoresKeys = {
  all: ['scores'] as const,
  list: (params?: ScoresParams) => ['scores', params] as const,
}

export function useScores(params?: ScoresParams) {
  return useQuery({
    queryKey: scoresKeys.list(params),
    queryFn: () => getScores(params),
  })
}
