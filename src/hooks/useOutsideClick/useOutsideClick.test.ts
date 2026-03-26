import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useRef } from 'react'
import { useOutsideClick } from './useOutsideClick'

describe('useOutsideClick', () => {
  it('calls handler on mousedown outside the element', () => {
    const handler = vi.fn()
    renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement('div'))
      useOutsideClick(ref, handler)
    })
    // Simulate click outside
    document.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('does not call handler when clicking inside element', () => {
    const handler = vi.fn()
    renderHook(() => {
      const inner = document.createElement('span')
      const outer = document.createElement('div')
      outer.appendChild(inner)
      const ref = useRef<HTMLDivElement>(outer)
      useOutsideClick(ref, handler)
      inner.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })
    expect(handler).not.toHaveBeenCalled()
  })

  it('calls handler on touchstart outside', () => {
    const handler = vi.fn()
    renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement('div'))
      useOutsideClick(ref, handler)
    })
    document.dispatchEvent(new TouchEvent('touchstart', { bubbles: true }))
    expect(handler).toHaveBeenCalled()
  })

  it('removes listeners on unmount', () => {
    const handler = vi.fn()
    const removeEventListener = vi.spyOn(document, 'removeEventListener')
    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement('div'))
      useOutsideClick(ref, handler)
    })
    unmount()
    expect(removeEventListener).toHaveBeenCalled()
    removeEventListener.mockRestore()
  })
})
