import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { Button } from '../Button'

describe('Button (MU atomic)', () => {
  describe('Rendering', () => {
    it('renders a button element', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('renders all variants without errors', () => {
      const variants = ['primary', 'secondary', 'ghost', 'danger'] as const
      variants.forEach((variant) => {
        const { unmount } = render(<Button variant={variant}>{variant}</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
        unmount()
      })
    })

    it('renders all sizes without errors', () => {
      const sizes = ['sm', 'md', 'lg'] as const
      sizes.forEach((size) => {
        const { unmount } = render(<Button size={size}>{size}</Button>)
        expect(screen.getByRole('button')).toBeInTheDocument()
        unmount()
      })
    })

    it('applies primary variant styles (MU red)', () => {
      const { container } = render(<Button variant="primary">Primary</Button>)
      expect(container.firstChild).toHaveClass('bg-[#DA291C]')
    })

    it('applies secondary variant styles', () => {
      const { container } = render(<Button variant="secondary">Secondary</Button>)
      expect(container.firstChild).toHaveClass('bg-[#2A2A2A]')
    })

    it('applies ghost variant styles', () => {
      const { container } = render(<Button variant="ghost">Ghost</Button>)
      expect(container.firstChild).toHaveClass('bg-transparent')
    })

    it('applies danger variant styles', () => {
      const { container } = render(<Button variant="danger">Danger</Button>)
      expect(container.firstChild).toHaveClass('bg-[#EF4444]')
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

    it('hides left icon when loading', () => {
      render(
        <Button loading leftIcon={<span data-testid="icon">←</span>}>
          Loading
        </Button>
      )
      expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
    })

    it('hides right icon when loading', () => {
      render(
        <Button loading rightIcon={<span data-testid="right-icon">→</span>}>
          Loading
        </Button>
      )
      expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument()
    })
  })

  describe('Loading state', () => {
    it('shows spinner SVG when loading', () => {
      render(<Button loading>Saving</Button>)
      expect(screen.getByTestId('button-spinner')).toBeInTheDocument()
    })

    it('is disabled when loading', () => {
      render(<Button loading>Saving</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('sets aria-disabled when loading', () => {
      render(<Button loading>Saving</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('Disabled state', () => {
    it('is disabled when disabled prop is set', () => {
      render(<Button disabled>Click</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('sets aria-disabled when disabled', () => {
      render(<Button disabled>Click</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
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

    it('forwards ref to the button element', () => {
      const ref = { current: null as HTMLButtonElement | null }
      render(<Button ref={ref}>Click</Button>)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })

  describe('Type attribute', () => {
    it('defaults to type="button"', () => {
      render(<Button>Click</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('accepts type="submit"', () => {
      render(<Button type="submit">Submit</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })
  })

  describe('Custom className', () => {
    it('merges custom className', () => {
      render(<Button className="extra-class">Click</Button>)
      expect(screen.getByRole('button')).toHaveClass('extra-class')
    })
  })
})
