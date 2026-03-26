import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stack } from './Stack'

describe('Stack', () => {
  it('renders children', () => {
    render(<Stack>content</Stack>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('applies flex class', () => {
    const { container } = render(<Stack>content</Stack>)
    expect(container.firstChild).toHaveClass('flex')
  })

  it('applies vertical direction by default', () => {
    const { container } = render(<Stack>content</Stack>)
    expect(container.firstChild).toHaveClass('flex-col')
  })

  it('applies horizontal direction', () => {
    const { container } = render(<Stack direction="horizontal">content</Stack>)
    expect(container.firstChild).toHaveClass('flex-row')
  })

  it('applies default md spacing', () => {
    const { container } = render(<Stack>content</Stack>)
    expect(container.firstChild).toHaveClass('gap-4')
  })

  it('applies sm spacing', () => {
    const { container } = render(<Stack spacing="sm">content</Stack>)
    expect(container.firstChild).toHaveClass('gap-2')
  })

  it('applies xl spacing', () => {
    const { container } = render(<Stack spacing="xl">content</Stack>)
    expect(container.firstChild).toHaveClass('gap-8')
  })

  it('applies no spacing', () => {
    const { container } = render(<Stack spacing="none">content</Stack>)
    expect(container.firstChild).not.toHaveClass('gap-4')
  })

  it('applies center alignment', () => {
    const { container } = render(<Stack align="center">content</Stack>)
    expect(container.firstChild).toHaveClass('items-center')
  })

  it('applies additional className', () => {
    const { container } = render(<Stack className="extra">content</Stack>)
    expect(container.firstChild).toHaveClass('extra')
  })

  it('forwards ref', () => {
    const ref = vi.fn()
    render(<Stack ref={ref}>content</Stack>)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
  })
})
