import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { SelectInput } from './SelectInput'

const options = [
  { value: 'nba', label: 'NBA' },
  { value: 'nfl', label: 'NFL' },
  { value: 'mlb', label: 'MLB', disabled: true },
]

describe('SelectInput', () => {
  describe('Rendering', () => {
    it('renders a select element', () => {
      render(<SelectInput options={options} />)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('renders all options', () => {
      render(<SelectInput options={options} />)
      expect(screen.getByRole('option', { name: 'NBA' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'NFL' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'MLB' })).toBeInTheDocument()
    })

    it('renders placeholder option', () => {
      render(<SelectInput options={options} placeholder="Pick a league" />)
      expect(screen.getByRole('option', { name: 'Pick a league' })).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<SelectInput options={options} label="League" />)
      expect(screen.getByLabelText('League')).toBeInTheDocument()
    })

    it('renders disabled option', () => {
      render(<SelectInput options={options} />)
      expect(screen.getByRole('option', { name: 'MLB' })).toBeDisabled()
    })
  })

  describe('Error state', () => {
    it('shows error message', () => {
      render(<SelectInput options={options} error errorMessage="Please select a league" />)
      expect(screen.getByRole('alert')).toHaveTextContent('Please select a league')
    })

    it('sets aria-invalid on error', () => {
      render(<SelectInput options={options} error />)
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not show error message without error flag', () => {
      render(<SelectInput options={options} errorMessage="Hidden" />)
      expect(screen.queryByText('Hidden')).not.toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('calls onChange when selection changes', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<SelectInput options={options} onChange={handleChange} />)
      await user.selectOptions(screen.getByRole('combobox'), 'nfl')
      expect(handleChange).toHaveBeenCalled()
    })

    it('forwards ref to select element', () => {
      const ref = { current: null as HTMLSelectElement | null }
      render(<SelectInput options={options} ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLSelectElement)
    })
  })

  describe('Disabled state', () => {
    it('disables the select', () => {
      render(<SelectInput options={options} disabled />)
      expect(screen.getByRole('combobox')).toBeDisabled()
    })
  })
})
