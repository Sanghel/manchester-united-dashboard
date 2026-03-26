import { describe, it, expect } from 'vitest'
import { render, screen } from '@/tests/utils/test-utils'
import { Button } from '../Button'
import { ButtonGroup } from './ButtonGroup'

describe('ButtonGroup', () => {
  const buttons = (
    <>
      <Button>Day</Button>
      <Button>Week</Button>
      <Button>Month</Button>
    </>
  )

  describe('Rendering', () => {
    it('renders a group container', () => {
      render(<ButtonGroup>{buttons}</ButtonGroup>)
      expect(screen.getByRole('group')).toBeInTheDocument()
    })

    it('renders all child buttons', () => {
      render(<ButtonGroup>{buttons}</ButtonGroup>)
      expect(screen.getAllByRole('button')).toHaveLength(3)
    })

    it('renders horizontally by default', () => {
      render(<ButtonGroup>{buttons}</ButtonGroup>)
      expect(screen.getByRole('group')).toHaveClass('flex-row')
    })

    it('renders vertically when orientation=vertical', () => {
      render(<ButtonGroup orientation="vertical">{buttons}</ButtonGroup>)
      expect(screen.getByRole('group')).toHaveClass('flex-col')
    })

    it('applies spacing class', () => {
      render(<ButtonGroup spacing="lg">{buttons}</ButtonGroup>)
      expect(screen.getByRole('group')).toHaveClass('gap-3')
    })

    it('applies no gap when attached=true', () => {
      render(<ButtonGroup attached>{buttons}</ButtonGroup>)
      expect(screen.getByRole('group')).toHaveClass('gap-0')
    })
  })

  describe('Accessibility', () => {
    it('has role=group', () => {
      render(<ButtonGroup>{buttons}</ButtonGroup>)
      expect(screen.getByRole('group')).toBeInTheDocument()
    })
  })
})
