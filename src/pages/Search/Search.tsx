import { useNavigate } from 'react-router-dom'
import { ScoreBoard } from '@/components/features/scores'
import { useDebounce } from '@/hooks'
import { useState } from 'react'

export function Search() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 400)

  return (
    <main className="p-4 md:p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Search Matches</h1>

      <input
        type="search"
        placeholder="Search by team or league..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search matches"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {debouncedQuery && <ScoreBoard onMatchClick={(id) => navigate(`/game/${id}`)} />}

      {!debouncedQuery && (
        <p className="text-gray-500 text-sm">Enter a team or league name to search.</p>
      )}
    </main>
  )
}
