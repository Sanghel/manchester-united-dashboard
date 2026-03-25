import { describe, it, expect } from 'vitest'

describe('Test setup', () => {
  it('runs tests correctly', () => {
    expect(true).toBe(true)
  })

  it('jest-dom matchers are available', () => {
    const element = document.createElement('div')
    element.textContent = 'Hello'
    document.body.appendChild(element)
    expect(element).toBeInTheDocument()
    document.body.removeChild(element)
  })
})
