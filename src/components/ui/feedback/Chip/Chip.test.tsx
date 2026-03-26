import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Chip } from './Chip'

describe('Chip', () => {
  it('renders children', () => {
    render(<Chip>Premier League</Chip>)
    expect(screen.getByText('Premier League')).toBeInTheDocument()
  })

  it('renders icon', () => {
    render(<Chip icon={<span data-testid="icon">⚽</span>}>text</Chip>)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders remove button when onRemove provided', () => {
    render(<Chip onRemove={vi.fn()}>tag</Chip>)
    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument()
  })

  it('calls onRemove when remove button is clicked', async () => {
    const user = userEvent.setup()
    const onRemove = vi.fn()
    render(<Chip onRemove={onRemove}>tag</Chip>)
    await user.click(screen.getByRole('button', { name: 'Remove' }))
    expect(onRemove).toHaveBeenCalledTimes(1)
  })

  it('renders as interactive when onClick provided', () => {
    render(<Chip onClick={vi.fn()}>tag</Chip>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onClick when chip is clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Chip onClick={onClick}>tag</Chip>)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies selected styles', () => {
    const { container } = render(<Chip selected>tag</Chip>)
    expect(container.firstChild).toHaveClass('bg-primary-600', 'text-white')
  })

  it('applies outlined variant', () => {
    const { container } = render(<Chip variant="outlined">tag</Chip>)
    expect(container.firstChild).toHaveClass('border', 'border-gray-300')
  })

  it('applies additional className', () => {
    const { container } = render(<Chip className="extra">tag</Chip>)
    expect(container.firstChild).toHaveClass('extra')
  })
})
