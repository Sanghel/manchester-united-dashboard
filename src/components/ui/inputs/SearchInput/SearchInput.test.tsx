import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  // ─── Rendering ────────────────────────────────────────────────────────────

  describe('Rendering', () => {
    it('renders a search input', () => {
      render(<SearchInput />)
      expect(screen.getByRole('searchbox')).toBeInTheDocument()
    })

    it('renders with placeholder', () => {
      render(<SearchInput placeholder="Find teams..." />)
      expect(screen.getByPlaceholderText('Find teams...')).toBeInTheDocument()
    })

    it('renders controlled value', () => {
      render(<SearchInput value="NBA" onChange={() => {}} />)
      expect(screen.getByRole('searchbox')).toHaveValue('NBA')
    })
  })

  // ─── Clear Button ─────────────────────────────────────────────────────────

  describe('Clear button', () => {
    it('shows clear button when value is non-empty', () => {
      render(<SearchInput value="test" onChange={() => {}} />)
      expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument()
    })

    it('hides clear button when value is empty', () => {
      render(<SearchInput value="" onChange={() => {}} />)
      expect(screen.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument()
    })

    it('calls onClear and clears value when clear button clicked', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const onClear = vi.fn()
      const onChange = vi.fn()
      render(<SearchInput value="NBA" onChange={onChange} onClear={onClear} />)
      await user.click(screen.getByRole('button', { name: /clear/i }))
      expect(onClear).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith('')
    })
  })

  // ─── Loading State ────────────────────────────────────────────────────────

  describe('Loading state', () => {
    it('shows spinner when loading=true', () => {
      render(<SearchInput loading />)
      expect(screen.getByTestId('search-spinner')).toBeInTheDocument()
    })

    it('hides clear button when loading=true even with a value', () => {
      render(<SearchInput loading value="NBA" onChange={() => {}} />)
      expect(screen.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument()
    })
  })

  // ─── Debounce ─────────────────────────────────────────────────────────────

  describe('Debounce', () => {
    it('calls onSearch after debounce delay', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const onSearch = vi.fn()
      render(<SearchInput onSearch={onSearch} debounceMs={300} />)
      await user.type(screen.getByRole('searchbox'), 'NBA')
      expect(onSearch).not.toHaveBeenCalled()
      vi.advanceTimersByTime(300)
      expect(onSearch).toHaveBeenCalledWith('NBA')
    })

    it('does not call onSearch before delay completes', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const onSearch = vi.fn()
      render(<SearchInput onSearch={onSearch} debounceMs={500} />)
      await user.type(screen.getByRole('searchbox'), 'N')
      vi.advanceTimersByTime(200)
      expect(onSearch).not.toHaveBeenCalled()
    })
  })

  // ─── Disabled ─────────────────────────────────────────────────────────────

  describe('Disabled state', () => {
    it('disables the input when disabled=true', () => {
      render(<SearchInput disabled />)
      expect(screen.getByRole('searchbox')).toBeDisabled()
    })
  })

  // ─── Accessibility ────────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has aria-label matching placeholder', () => {
      render(<SearchInput placeholder="Search players" />)
      expect(screen.getByRole('searchbox')).toHaveAttribute('aria-label', 'Search players')
    })
  })
})
