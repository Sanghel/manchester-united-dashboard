import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { MatchStatus } from '@/services/sports'

interface FiltersState {
  selectedLeagueId: number | null
  selectedSeason: string
  selectedStatus: MatchStatus | null
  selectedDate: string | null
  setLeague: (id: number | null) => void
  setSeason: (season: string) => void
  setStatus: (status: MatchStatus | null) => void
  setDate: (date: string | null) => void
  resetFilters: () => void
}

const DEFAULT_SEASON = '2023/24'

export const useFiltersStore = create<FiltersState>()(
  persist(
    (set) => ({
      selectedLeagueId: 39, // Premier League
      selectedSeason: DEFAULT_SEASON,
      selectedStatus: null,
      selectedDate: null,
      setLeague: (id) => set({ selectedLeagueId: id }),
      setSeason: (season) => set({ selectedSeason: season }),
      setStatus: (status) => set({ selectedStatus: status }),
      setDate: (date) => set({ selectedDate: date }),
      resetFilters: () =>
        set({
          selectedLeagueId: 39,
          selectedSeason: DEFAULT_SEASON,
          selectedStatus: null,
          selectedDate: null,
        }),
    }),
    { name: 'sports-filters' }
  )
)
