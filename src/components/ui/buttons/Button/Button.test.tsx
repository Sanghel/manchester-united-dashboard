import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  describe('Rendering', () => {
    it('renders a button element', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('renders all variants', () => {
      const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success'] as const
      variants.forEach((variant) => {
        const { unmount } = render(<Button variant={variant}>{variant}</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
        unmount()
      })
    })

    it('renders all sizes', () => {
      const sizes = ['sm', 'md', 'lg'] as const
      sizes.forEach((size) => {
        const { unmount } = render(<Button size={size}>{size}</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
        unmount()
      })
    })

    it('renders with fullWidth', () => {
      render(<Button fullWidth>Full</Button>)
      expect(screen.getByRole('button')).toHaveClass('w-full')
    })
  })

  describe('Icons', () => {
    it('renders left icon', () => {
      render(<Button leftIcon={<span data-testid="left-icon">←</span>}>Go back</Button>)
      expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    })

    it('renders right icon', () => {
      render(<Button rightIcon={<span data-testid="right-icon">→</span>}>Next</Button>)
      expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    })

    it('hides icons when loading', () => {
      render(
        <Button loading leftIcon={<span data-testid="icon">←</span>}>
          Loading
        </Button>
      )
      expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
    })
  })

  describe('Loading state', () => {
    it('shows spinner when loading', () => {
      render(<Button loading>Saving</Button>)
      expect(screen.getByTestId('button-spinner')).toBeInTheDocument()
    })

    it('is disabled when loading', () => {
      render(<Button loading>Saving</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })

  describe('Disabled state', () => {
    it('is disabled when disabled prop is set', () => {
      render(<Button disabled>Click</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })

  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click</Button>)
      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(
        <Button onClick={handleClick} disabled>
          Click
        </Button>
      )
      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('does not call onClick when loading', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(
        <Button onClick={handleClick} loading>
          Click
        </Button>
      )
      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('forwards ref', () => {
      const ref = { current: null as HTMLButtonElement | null }
      render(<Button ref={ref}>Click</Button>)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })

  describe('Accessibility', () => {
    it('is focusable via keyboard', async () => {
      const user = userEvent.setup()
      render(<Button>Click</Button>)
      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()
    })

    it('can be activated with Enter', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click</Button>)
      await user.tab()
      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('can be activated with Space', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click</Button>)
      await user.tab()
      await user.keyboard(' ')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
