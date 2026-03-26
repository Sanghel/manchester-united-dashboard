import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'UI/Feedback/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: { title: 'No matches found' },
}

export const WithDescription: Story = {
  args: {
    title: 'No matches found',
    description: 'Try adjusting your date range or league filters.',
  },
}

export const WithIcon: Story = {
  args: {
    title: 'No scores yet',
    description: 'Check back when the match starts.',
    icon: '🏆',
  },
}

export const WithAction: Story = {
  args: {
    title: 'Nothing here',
    description: 'Your search returned no results.',
    icon: '🔍',
    action: (
      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium">
        Clear Filters
      </button>
    ),
  },
}
