import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'UI/Feedback/Spinner',
  component: Spinner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }
export const ExtraLarge: Story = { args: { size: 'xl' } }

export const White: Story = {
  args: { size: 'md', color: 'white' },
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-4 rounded">
        <Story />
      </div>
    ),
  ],
}

export const Gray: Story = { args: { size: 'md', color: 'gray' } }

export const WithCustomLabel: Story = {
  args: { size: 'md', label: 'Fetching live scores...' },
}
