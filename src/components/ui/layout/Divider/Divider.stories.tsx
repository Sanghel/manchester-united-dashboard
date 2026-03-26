import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'UI/Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {}

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [
    (Story) => (
      <div className="flex h-12 items-center gap-4">
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
}

export const WithLabel: Story = {
  args: { label: 'OR' },
}

export const WithCustomLabel: Story = {
  args: { label: 'Today' },
}
