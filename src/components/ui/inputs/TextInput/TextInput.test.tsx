import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { TextInput } from './TextInput'

describe('TextInput', () => {
  // ─── Rendering ────────────────────────────────────────────────────────────

  describe('Rendering', () => {
    it('renders an input element', () => {
      render(<TextInput />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('renders with a label', () => {
      render(<TextInput label="Email" />)
      expect(screen.getByLabelText('Email')).toBeInTheDocument()
      expect(screen.getByText('Email')).toBeInTheDocument()
    })

    it('renders with a placeholder', () => {
      render(<TextInput placeholder="Enter text..." />)
      expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument()
    })

    it('renders with a default value', () => {
      render(<TextInput defaultValue="hello" />)
      expect(screen.getByRole('textbox')).toHaveValue('hello')
    })

    it('associates label with input via htmlFor', () => {
      render(<TextInput label="Username" id="user" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('id', 'user')
      expect(screen.getByLabelText('Username')).toBe(input)
    })

    it('renders all size variants', () => {
      const sizes = ['sm', 'md', 'lg'] as const
      sizes.forEach((size) => {
        const { unmount } = render(<TextInput size={size} data-testid={`input-${size}`} />)
        expect(screen.getByTestId(`input-${size}`)).toBeInTheDocument()
        unmount()
      })
    })
  })

  // ─── Error State ──────────────────────────────────────────────────────────

  describe('Error state', () => {
    it('renders error message when error=true and errorMessage is set', () => {
      render(<TextInput error errorMessage="This field is required" />)
      expect(screen.getByText('This field is required')).toBeInTheDocument()
    })

    it('sets aria-invalid when error=true', () => {
      render(<TextInput error />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('links input to error message via aria-describedby', () => {
      render(<TextInput label="Email" error errorMessage="Invalid email" />)
      const input = screen.getByRole('textbox')
      const errorId = input.getAttribute('aria-describedby')
      expect(errorId).toBeTruthy()
      expect(document.getElementById(errorId!)).toHaveTextContent('Invalid email')
    })

    it('does not render error message when error=false', () => {
      render(<TextInput errorMessage="Should not show" />)
      expect(screen.queryByText('Should not show')).not.toBeInTheDocument()
    })

    it('error message has role=alert', () => {
      render(<TextInput error errorMessage="Error occurred" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })
  })

  // ─── Helper Text ──────────────────────────────────────────────────────────

  describe('Helper text', () => {
    it('renders helper text when no error', () => {
      render(<TextInput helperText="8 characters minimum" />)
      expect(screen.getByText('8 characters minimum')).toBeInTheDocument()
    })

    it('hides helper text when error is set', () => {
      render(<TextInput error errorMessage="Error" helperText="Helper" />)
      expect(screen.queryByText('Helper')).not.toBeInTheDocument()
      expect(screen.getByText('Error')).toBeInTheDocument()
    })
  })

  // ─── Icons ────────────────────────────────────────────────────────────────

  describe('Icons', () => {
    it('renders icon on the left by default', () => {
      render(<TextInput icon={<span data-testid="icon">@</span>} />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })

    it('renders icon on the right when iconPosition=right', () => {
      render(<TextInput icon={<span data-testid="icon">@</span>} iconPosition="right" />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
    })
  })

  // ─── Disabled State ───────────────────────────────────────────────────────

  describe('Disabled state', () => {
    it('renders as disabled when disabled=true', () => {
      render(<TextInput disabled />)
      expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('does not fire onChange when disabled', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<TextInput disabled onChange={handleChange} />)
      await user.type(screen.getByRole('textbox'), 'hello')
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  // ─── Interactions ─────────────────────────────────────────────────────────

  describe('Interactions', () => {
    it('calls onChange when typing', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<TextInput onChange={handleChange} />)
      await user.type(screen.getByRole('textbox'), 'hello')
      expect(handleChange).toHaveBeenCalled()
    })

    it('updates value when controlled', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<TextInput value="" onChange={handleChange} />)
      await user.type(screen.getByRole('textbox'), 'a')
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('forwards ref to the input element', () => {
      const ref = { current: null as HTMLInputElement | null }
      render(<TextInput ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
  })

  // ─── Accessibility ────────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('is focusable via keyboard', async () => {
      const user = userEvent.setup()
      render(<TextInput />)
      await user.tab()
      expect(screen.getByRole('textbox')).toHaveFocus()
    })

    it('is not focusable when disabled', async () => {
      const user = userEvent.setup()
      render(<TextInput disabled />)
      await user.tab()
      expect(screen.getByRole('textbox')).not.toHaveFocus()
    })

    it('passes additional props to input', () => {
      render(<TextInput data-testid="custom-input" type="email" />)
      const input = screen.getByTestId('custom-input')
      expect(input).toHaveAttribute('type', 'email')
    })
  })
})
