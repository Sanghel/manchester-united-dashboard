import { StandingsTable } from '@/components/features/standings'
import { useFiltersStore } from '@/stores'

// Manchester United team ID
const MAN_UTD_ID = 33

export function Standings() {
  const { selectedLeagueId, selectedSeason } = useFiltersStore()

  return (
    <main className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">League Standings</h1>
      <StandingsTable
        leagueId={selectedLeagueId ?? 39}
        season={selectedSeason}
        highlightTeamId={MAN_UTD_ID}
      />
    </main>
  )
}
