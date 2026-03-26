import { useQuery } from '@tanstack/react-query'
import { getStandings } from '@/services/sports'
import type { StandingsParams } from '@/services/sports'

export const standingsKeys = {
  all: ['standings'] as const,
  list: (params: StandingsParams) => ['standings', params.leagueId, params.season] as const,
}

export function useStandings(params: StandingsParams) {
  return useQuery({
    queryKey: standingsKeys.list(params),
    queryFn: () => getStandings(params),
    enabled: Boolean(params.leagueId && params.season),
  })
}
