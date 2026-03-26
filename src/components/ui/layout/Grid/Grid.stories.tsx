import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from './Grid'

const meta: Meta<typeof Grid> = {
  title: 'UI/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Grid>

function Box({ label }: { label: string }) {
  return (
    <div className="bg-primary-50 border border-primary-200 rounded p-4 text-primary-700 text-sm text-center">
      {label}
    </div>
  )
}

export const TwoColumns: Story = {
  args: {
    cols: 2,
    gap: 'md',
    children: [1, 2, 3, 4].map((n) => <Box key={n} label={`Item ${n}`} />),
  },
}

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    gap: 'md',
    children: [1, 2, 3, 4, 5, 6].map((n) => <Box key={n} label={`Item ${n}`} />),
  },
}

export const FourColumns: Story = {
  args: {
    cols: 4,
    gap: 'sm',
    children: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => <Box key={n} label={`Item ${n}`} />),
  },
}
