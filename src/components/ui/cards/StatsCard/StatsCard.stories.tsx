import type { Meta, StoryObj } from '@storybook/react'
import { StatsCard } from './StatsCard'

const meta: Meta<typeof StatsCard> = {
  title: 'UI/Cards/StatsCard',
  component: StatsCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StatsCard>

export const Default: Story = {
  args: {
    label: 'Goals Scored',
    value: 42,
  },
}

export const WithTrendUp: Story = {
  args: {
    label: 'Goals Scored',
    value: 42,
    trend: 'up',
    trendLabel: '+5 vs last month',
  },
}

export const WithTrendDown: Story = {
  args: {
    label: 'Goals Conceded',
    value: 18,
    trend: 'down',
    trendLabel: '-3 vs last month',
  },
}

export const WithTrendNeutral: Story = {
  args: {
    label: 'Assists',
    value: 30,
    trend: 'neutral',
    trendLabel: 'No change',
  },
}

export const WithSubValue: Story = {
  args: {
    label: 'Distance Covered',
    value: 10.8,
    subValue: 'km',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Pass Accuracy',
    value: '87%',
    description: 'Average pass accuracy across all matches this season',
    trend: 'up',
    trendLabel: '+2% vs last season',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Goals',
    value: 42,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
}
