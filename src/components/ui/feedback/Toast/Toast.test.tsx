import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { ToastProvider, useToast } from './Toast'

function TestApp({ message = 'Test message', variant = 'info' as const }) {
  const { addToast } = useToast()
  return <button onClick={() => addToast(message, variant)}>Show Toast</button>
}

function renderWithProvider(ui: React.ReactElement) {
  return render(<ToastProvider>{ui}</ToastProvider>)
}

describe('ToastProvider / useToast', () => {
  it('renders children', () => {
    renderWithProvider(<p>child</p>)
    expect(screen.getByText('child')).toBeInTheDocument()
  })

  it('shows toast when addToast is called', async () => {
    const user = userEvent.setup()
    renderWithProvider(<TestApp />)
    await user.click(screen.getByRole('button', { name: 'Show Toast' }))
    expect(screen.getByTestId('toast')).toBeInTheDocument()
    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  it('shows success variant toast', async () => {
    const user = userEvent.setup()
    renderWithProvider(<TestApp message="Done!" variant="success" />)
    await user.click(screen.getByRole('button', { name: 'Show Toast' }))
    expect(screen.getByTestId('toast')).toHaveClass('bg-green-600')
  })

  it('shows error variant toast', async () => {
    const user = userEvent.setup()
    renderWithProvider(<TestApp message="Failed!" variant="error" />)
    await user.click(screen.getByRole('button', { name: 'Show Toast' }))
    expect(screen.getByTestId('toast')).toHaveClass('bg-red-600')
  })

  it('shows warning variant toast', async () => {
    const user = userEvent.setup()
    renderWithProvider(<TestApp message="Watch out!" variant="warning" />)
    await user.click(screen.getByRole('button', { name: 'Show Toast' }))
    expect(screen.getByTestId('toast')).toHaveClass('bg-yellow-500')
  })

  it('dismisses toast when close button is clicked', async () => {
    const user = userEvent.setup()
    renderWithProvider(<TestApp />)
    await user.click(screen.getByRole('button', { name: 'Show Toast' }))
    expect(screen.getByTestId('toast')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Dismiss notification' }))
    expect(screen.queryByTestId('toast')).toBeNull()
  })

  it('throws when useToast is used outside provider', () => {
    const originalConsoleError = console.error
    console.error = vi.fn()
    expect(() => render(<TestApp />)).toThrow('useToast must be used inside ToastProvider')
    console.error = originalConsoleError
  })

  it('toast has role=alert', async () => {
    const user = userEvent.setup()
    renderWithProvider(<TestApp />)
    await user.click(screen.getByRole('button', { name: 'Show Toast' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
