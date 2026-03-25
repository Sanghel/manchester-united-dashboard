import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { DatePicker } from './DatePicker'

describe('DatePicker', () => {
  describe('Rendering', () => {
    it('renders a date input', () => {
      render(<DatePicker />)
      expect(document.querySelector('input[type="date"]')).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<DatePicker label="Match date" />)
      expect(screen.getByText('Match date')).toBeInTheDocument()
    })

    it('sets min and max attributes', () => {
      render(<DatePicker minDate="2024-01-01" maxDate="2024-12-31" data-testid="dp" />)
      const input = document.querySelector('input[type="date"]')!
      expect(input).toHaveAttribute('min', '2024-01-01')
      expect(input).toHaveAttribute('max', '2024-12-31')
    })

    it('renders with a value', () => {
      render(<DatePicker value="2024-06-15" onChange={() => {}} data-testid="dp" />)
      expect(document.querySelector('input[type="date"]')).toHaveValue('2024-06-15')
    })
  })

  describe('Error state', () => {
    it('shows error message', () => {
      render(<DatePicker error errorMessage="Date is required" />)
      expect(screen.getByRole('alert')).toHaveTextContent('Date is required')
    })

    it('sets aria-invalid on error', () => {
      render(<DatePicker error />)
      expect(document.querySelector('input[type="date"]')).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Disabled state', () => {
    it('disables the input', () => {
      render(<DatePicker disabled />)
      expect(document.querySelector('input[type="date"]')).toBeDisabled()
    })
  })

  describe('Interactions', () => {
    it('calls onChange', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<DatePicker onChange={handleChange} />)
      const input = document.querySelector('input[type="date"]')!
      await user.type(input, '2024-06-15')
      expect(handleChange).toHaveBeenCalled()
    })

    it('forwards ref', () => {
      const ref = { current: null as HTMLInputElement | null }
      render(<DatePicker ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
  })
})
