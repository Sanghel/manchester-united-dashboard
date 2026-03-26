import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Flex } from './Flex'

describe('Flex', () => {
  it('renders children', () => {
    render(<Flex>content</Flex>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('applies flex class', () => {
    const { container } = render(<Flex>content</Flex>)
    expect(container.firstChild).toHaveClass('flex')
  })

  it('applies default direction row', () => {
    const { container } = render(<Flex>content</Flex>)
    expect(container.firstChild).toHaveClass('flex-row')
  })

  it('applies column direction', () => {
    const { container } = render(<Flex direction="col">content</Flex>)
    expect(container.firstChild).toHaveClass('flex-col')
  })

  it('applies row-reverse direction', () => {
    const { container } = render(<Flex direction="row-reverse">content</Flex>)
    expect(container.firstChild).toHaveClass('flex-row-reverse')
  })

  it('applies center alignment', () => {
    const { container } = render(<Flex align="center">content</Flex>)
    expect(container.firstChild).toHaveClass('items-center')
  })

  it('applies justify-between', () => {
    const { container } = render(<Flex justify="between">content</Flex>)
    expect(container.firstChild).toHaveClass('justify-between')
  })

  it('applies gap', () => {
    const { container } = render(<Flex gap="md">content</Flex>)
    expect(container.firstChild).toHaveClass('gap-4')
  })

  it('applies wrap', () => {
    const { container } = render(<Flex wrap="wrap">content</Flex>)
    expect(container.firstChild).toHaveClass('flex-wrap')
  })

  it('applies additional className', () => {
    const { container } = render(<Flex className="extra">content</Flex>)
    expect(container.firstChild).toHaveClass('extra')
  })

  it('forwards ref', () => {
    const ref = vi.fn()
    render(<Flex ref={ref}>content</Flex>)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLDivElement))
  })
})
