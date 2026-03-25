import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { IconButton } from './IconButton'

const icon = <svg data-testid="icon" aria-hidden="true" />

describe('IconButton', () => {
  describe('Rendering', () => {
    it('renders a button', () => {
      render(<IconButton icon={icon} ariaLabel="Delete" />)
      expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    })

    it('renders the icon', () => {
      render(<IconButton icon={icon} ariaLabel="Action" />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('renders all variants', () => {
      const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const
      variants.forEach((variant) => {
        const { unmount } = render(<IconButton icon={icon} ariaLabel="btn" variant={variant} />)
        expect(screen.getByRole('button')).toBeInTheDocument()
        unmount()
      })
    })

    it('renders all sizes', () => {
      const sizes = ['sm', 'md', 'lg'] as const
      sizes.forEach((size) => {
        const { unmount } = render(<IconButton icon={icon} ariaLabel="btn" size={size} />)
        expect(screen.getByRole('button')).toBeInTheDocument()
        unmount()
      })
    })

    it('renders rounded shape', () => {
      render(<IconButton icon={icon} ariaLabel="btn" shape="rounded" />)
      expect(screen.getByRole('button')).toHaveClass('rounded-full')
    })
  })

  describe('Accessibility', () => {
    it('has aria-label', () => {
      render(<IconButton icon={icon} ariaLabel="Close dialog" />)
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close dialog')
    })

    it('is focusable', async () => {
      const user = userEvent.setup()
      render(<IconButton icon={icon} ariaLabel="Action" />)
      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()
    })
  })

  describe('Interactions', () => {
    it('calls onClick', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<IconButton icon={icon} ariaLabel="Action" onClick={handleClick} />)
      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('is disabled when disabled=true', () => {
      render(<IconButton icon={icon} ariaLabel="Action" disabled />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('forwards ref', () => {
      const ref = { current: null as HTMLButtonElement | null }
      render(<IconButton icon={icon} ariaLabel="Action" ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })
})
