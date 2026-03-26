import type { Meta, StoryObj } from '@storybook/react'
import { CardHeader } from './CardHeader'

const meta: Meta<typeof CardHeader> = {
  title: 'UI/Cards/CardHeader',
  component: CardHeader,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardHeader>

export const Default: Story = {
  args: { title: 'Card Title' },
}

export const WithSubtitle: Story = {
  args: {
    title: 'Match Preview',
    subtitle: 'Premier League · Matchday 28',
  },
}

export const WithAvatar: Story = {
  args: {
    title: 'Manchester United',
    subtitle: 'Premier League',
    avatar: (
      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
        MU
      </div>
    ),
  },
}

export const WithActions: Story = {
  args: {
    title: 'Live Scores',
    actions: (
      <button className="text-xs text-blue-600 font-medium hover:underline">View All</button>
    ),
  },
}

export const Full: Story = {
  args: {
    title: 'Manchester United',
    subtitle: 'Premier League',
    avatar: (
      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
        MU
      </div>
    ),
    actions: <button className="text-xs text-blue-600 font-medium">More</button>,
  },
}
