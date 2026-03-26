import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Flex } from './Flex'

describe('Flex', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Flex>
        <span>item</span>
      </Flex>
    )
    expect(getByText('item')).toBeInTheDocument()
  })

  it('applies flex class', () => {
    const { container } = render(
      <Flex>
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('flex')
  })

  it('applies row direction by default', () => {
    const { container } = render(
      <Flex>
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('flex-row')
  })

  it('applies col direction', () => {
    const { container } = render(
      <Flex direction="col">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('flex-col')
  })

  it('applies justify-start by default', () => {
    const { container } = render(
      <Flex>
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('justify-start')
  })

  it('applies justify-between', () => {
    const { container } = render(
      <Flex justify="between">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('justify-between')
  })

  it('applies justify-center', () => {
    const { container } = render(
      <Flex justify="center">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('justify-center')
  })

  it('applies justify-end', () => {
    const { container } = render(
      <Flex justify="end">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('justify-end')
  })

  it('applies justify-around', () => {
    const { container } = render(
      <Flex justify="around">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('justify-around')
  })

  it('applies items-start by default', () => {
    const { container } = render(
      <Flex>
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('items-start')
  })

  it('applies items-center', () => {
    const { container } = render(
      <Flex align="center">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('items-center')
  })

  it('applies items-end', () => {
    const { container } = render(
      <Flex align="end">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('items-end')
  })

  it('applies sm gap class', () => {
    const { container } = render(
      <Flex gap="sm">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('gap-2')
  })

  it('applies md gap class', () => {
    const { container } = render(
      <Flex gap="md">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('gap-4')
  })

  it('applies lg gap class', () => {
    const { container } = render(
      <Flex gap="lg">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('gap-6')
  })

  it('does not apply gap class when gap is not provided', () => {
    const { container } = render(
      <Flex>
        <div />
      </Flex>
    )
    expect(container.firstChild).not.toHaveClass('gap-2')
    expect(container.firstChild).not.toHaveClass('gap-4')
    expect(container.firstChild).not.toHaveClass('gap-6')
  })

  it('applies flex-wrap when wrap is true', () => {
    const { container } = render(
      <Flex wrap>
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('flex-wrap')
  })

  it('does not apply flex-wrap by default', () => {
    const { container } = render(
      <Flex>
        <div />
      </Flex>
    )
    expect(container.firstChild).not.toHaveClass('flex-wrap')
  })

  it('applies additional className', () => {
    const { container } = render(
      <Flex className="extra">
        <div />
      </Flex>
    )
    expect(container.firstChild).toHaveClass('extra')
  })
})
