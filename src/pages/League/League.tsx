import { useParams } from 'react-router-dom'
import { StandingsTable } from '@/components/features/standings'
import { useFiltersStore } from '@/stores'

export function League() {
  const { id } = useParams<{ id: string }>()
  const { selectedSeason } = useFiltersStore()
  const leagueId = Number(id) || 39

  return (
    <main className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">League Table</h1>
      <StandingsTable leagueId={leagueId} season={selectedSeason} />
    </main>
  )
}
