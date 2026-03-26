import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Chip } from './Chip'

const meta: Meta<typeof Chip> = {
  title: 'UI/Feedback/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: { children: 'Premier League' },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {}

export const Outlined: Story = { args: { variant: 'outlined' } }
export const Primary: Story = { args: { variant: 'primary' } }
export const Selected: Story = { args: { selected: true } }

export const WithRemove: Story = {
  args: { onRemove: () => {} },
}

export const WithIcon: Story = {
  args: {
    icon: '⚽',
    children: 'Football',
  },
}

function InteractiveChip() {
  const [selected, setSelected] = useState(false)
  return (
    <Chip selected={selected} onClick={() => setSelected((s) => !s)}>
      {selected ? 'Selected' : 'Click me'}
    </Chip>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveChip />,
}

function FilterChipGroup() {
  const [active, setActive] = useState<string[]>([])
  const leagues = ['Premier League', 'La Liga', 'Bundesliga', 'Serie A']
  const toggle = (l: string) =>
    setActive((a) => (a.includes(l) ? a.filter((x) => x !== l) : [...a, l]))
  return (
    <div className="flex flex-wrap gap-2">
      {leagues.map((l) => (
        <Chip key={l} selected={active.includes(l)} onClick={() => toggle(l)}>
          {l}
        </Chip>
      ))}
    </div>
  )
}

export const FilterChips: Story = {
  render: () => <FilterChipGroup />,
}
