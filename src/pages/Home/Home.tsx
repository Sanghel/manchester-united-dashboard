import { useNavigate } from 'react-router-dom'
import { ScoreBoard } from '@/components/features/scores'
import { useFiltersStore } from '@/stores'

export function Home() {
  const navigate = useNavigate()
  const { selectedLeagueId } = useFiltersStore()

  return (
    <main className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Latest Scores</h1>
      <ScoreBoard
        params={{ leagueId: selectedLeagueId ?? undefined }}
        onMatchClick={(id) => navigate(`/game/${id}`)}
      />
    </main>
  )
}
