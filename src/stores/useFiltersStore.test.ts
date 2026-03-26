import { describe, it, expect, beforeEach } from 'vitest'
import { useFiltersStore } from './useFiltersStore'

describe('useFiltersStore', () => {
  beforeEach(() => {
    useFiltersStore.setState({
      selectedLeagueId: 39,
      selectedSeason: '2023/24',
      selectedStatus: null,
      selectedDate: null,
    })
  })

  it('has default state', () => {
    const { selectedLeagueId, selectedSeason } = useFiltersStore.getState()
    expect(selectedLeagueId).toBe(39)
    expect(selectedSeason).toBe('2023/24')
  })

  it('setLeague updates leagueId', () => {
    useFiltersStore.getState().setLeague(2)
    expect(useFiltersStore.getState().selectedLeagueId).toBe(2)
  })

  it('setSeason updates season', () => {
    useFiltersStore.getState().setSeason('2024/25')
    expect(useFiltersStore.getState().selectedSeason).toBe('2024/25')
  })

  it('setStatus updates status', () => {
    useFiltersStore.getState().setStatus('live')
    expect(useFiltersStore.getState().selectedStatus).toBe('live')
  })

  it('resetFilters resets to defaults', () => {
    useFiltersStore.getState().setLeague(5)
    useFiltersStore.getState().setStatus('finished')
    useFiltersStore.getState().resetFilters()
    const { selectedLeagueId, selectedStatus } = useFiltersStore.getState()
    expect(selectedLeagueId).toBe(39)
    expect(selectedStatus).toBe(null)
  })
})
