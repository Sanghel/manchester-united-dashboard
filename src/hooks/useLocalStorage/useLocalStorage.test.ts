import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns initialValue when key is absent', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'default'))
    expect(result.current[0]).toBe('default')
  })

  it('sets and reads a string value', () => {
    const { result } = renderHook(() => useLocalStorage('key', ''))
    act(() => result.current[1]('hello'))
    expect(result.current[0]).toBe('hello')
    expect(localStorage.getItem('key')).toBe('"hello"')
  })

  it('persists across hook re-mounts', () => {
    localStorage.setItem('key', '"persisted"')
    const { result } = renderHook(() => useLocalStorage('key', 'default'))
    expect(result.current[0]).toBe('persisted')
  })

  it('supports objects', () => {
    const { result } = renderHook(() => useLocalStorage('obj', { a: 1 }))
    act(() => result.current[1]({ a: 2 }))
    expect(result.current[0]).toEqual({ a: 2 })
  })

  it('supports functional updater', () => {
    const { result } = renderHook(() => useLocalStorage('count', 0))
    act(() => result.current[1]((prev) => prev + 1))
    expect(result.current[0]).toBe(1)
  })

  it('removes value when removeValue is called', () => {
    localStorage.setItem('key', '"stored"')
    const { result } = renderHook(() => useLocalStorage('key', 'default'))
    act(() => result.current[2]())
    expect(result.current[0]).toBe('default')
    expect(localStorage.getItem('key')).toBeNull()
  })
})
