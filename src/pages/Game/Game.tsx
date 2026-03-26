import { useParams, useNavigate } from 'react-router-dom'
import { GameStatsPanel } from '@/components/features/stats'

export function Game() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const matchId = Number(id)

  if (!matchId) {
    return (
      <main className="p-4 md:p-6">
        <p className="text-gray-600">Invalid match ID.</p>
      </main>
    )
  }

  return (
    <main className="p-4 md:p-6 space-y-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
        aria-label="Go back"
      >
        ← Back
      </button>
      <h1 className="text-2xl font-bold text-gray-900">Match Statistics</h1>
      <GameStatsPanel matchId={matchId} />
    </main>
  )
}
