import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Text: Story = { args: { variant: 'text' } }

export const Heading: Story = { args: { variant: 'heading' } }

export const Circle: Story = {
  args: { variant: 'circle', width: '48px', height: '48px' },
}

export const Rectangle: Story = {
  args: { variant: 'rectangle', width: '100%', height: '120px' },
}

export const Card: Story = {
  args: { variant: 'card', width: '100%', height: '160px' },
}

export const CardSkeleton: Story = {
  render: () => (
    <div className="p-4 border border-gray-200 rounded-xl w-64 space-y-3">
      <div className="flex items-center gap-3">
        <Skeleton variant="circle" width="40px" height="40px" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="heading" />
          <Skeleton variant="text" className="w-1/2" />
        </div>
      </div>
      <Skeleton variant="rectangle" height="80px" />
      <Skeleton variant="text" />
      <Skeleton variant="text" className="w-3/4" />
    </div>
  ),
}
