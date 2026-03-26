import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta: Meta<typeof Flex> = {
  title: 'UI/Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Flex>

function Box({ label }: { label: string }) {
  return (
    <div className="bg-primary-50 border border-primary-200 rounded px-3 py-2 text-primary-700 text-sm">
      {label}
    </div>
  )
}

export const Row: Story = {
  args: {
    direction: 'row',
    gap: 'md',
    children: [1, 2, 3].map((n) => <Box key={n} label={`Item ${n}`} />),
  },
}

export const Column: Story = {
  args: {
    direction: 'col',
    gap: 'sm',
    children: [1, 2, 3].map((n) => <Box key={n} label={`Item ${n}`} />),
  },
}

export const CenterAligned: Story = {
  args: {
    direction: 'row',
    align: 'center',
    justify: 'between',
    gap: 'md',
    children: [<Box key={1} label="Logo" />, <Box key={2} label="Nav" />],
  },
}

export const Wrapped: Story = {
  args: {
    wrap: 'wrap',
    gap: 'sm',
    children: [1, 2, 3, 4, 5, 6].map((n) => <Box key={n} label={`Tag ${n}`} />),
  },
}
