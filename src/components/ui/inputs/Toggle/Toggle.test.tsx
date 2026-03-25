import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import userEvent from '@testing-library/user-event'
import { Toggle } from './Toggle'

describe('Toggle', () => {
  describe('Rendering', () => {
    it('renders a checkbox with role=switch', () => {
      render(<Toggle />)
      expect(screen.getByRole('switch')).toBeInTheDocument()
    })

    it('renders with label', () => {
      render(<Toggle label="Enable notifications" />)
      expect(screen.getByText('Enable notifications')).toBeInTheDocument()
    })

    it('renders as unchecked by default', () => {
      render(<Toggle />)
      expect(screen.getByRole('switch')).not.toBeChecked()
    })

    it('renders as checked when defaultChecked=true', () => {
      render(<Toggle defaultChecked />)
      expect(screen.getByRole('switch')).toBeChecked()
    })

    it('renders all sizes', () => {
      const sizes = ['sm', 'md', 'lg'] as const
      sizes.forEach((size) => {
        const { unmount } = render(<Toggle size={size} />)
        expect(screen.getByRole('switch')).toBeInTheDocument()
        unmount()
      })
    })
  })

  describe('Label position', () => {
    it('renders label on the right by default', () => {
      render(<Toggle label="Right label" />)
      expect(screen.getByText('Right label')).toBeInTheDocument()
    })

    it('renders label on the left when labelPosition=left', () => {
      render(<Toggle label="Left label" labelPosition="left" />)
      expect(screen.getByText('Left label')).toBeInTheDocument()
    })
  })

  describe('Interactions', () => {
    it('calls onChange when toggled', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<Toggle onChange={handleChange} />)
      await user.click(screen.getByRole('switch'))
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('does not call onChange when disabled', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(<Toggle disabled onChange={handleChange} />)
      await user.click(screen.getByRole('switch'))
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('forwards ref', () => {
      const ref = { current: null as HTMLInputElement | null }
      render(<Toggle ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
  })

  describe('Disabled state', () => {
    it('disables the switch', () => {
      render(<Toggle disabled />)
      expect(screen.getByRole('switch')).toBeDisabled()
    })
  })

  describe('Accessibility', () => {
    it('is labelled by the label element', () => {
      render(<Toggle label="Dark mode" />)
      expect(screen.getByRole('switch', { name: 'Dark mode' })).toBeInTheDocument()
    })
  })
})
