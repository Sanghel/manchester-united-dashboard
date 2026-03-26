import { describe, it, expect, beforeEach } from 'vitest'
import { useUIStore } from './useUIStore'

describe('useUIStore', () => {
  beforeEach(() => {
    useUIStore.setState({ sidebarOpen: false, theme: 'light' })
  })

  it('has default state', () => {
    expect(useUIStore.getState().sidebarOpen).toBe(false)
    expect(useUIStore.getState().theme).toBe('light')
  })

  it('toggleSidebar flips sidebarOpen', () => {
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarOpen).toBe(true)
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarOpen).toBe(false)
  })

  it('setSidebarOpen sets value directly', () => {
    useUIStore.getState().setSidebarOpen(true)
    expect(useUIStore.getState().sidebarOpen).toBe(true)
  })

  it('setTheme updates theme', () => {
    useUIStore.getState().setTheme('dark')
    expect(useUIStore.getState().theme).toBe('dark')
  })
})
