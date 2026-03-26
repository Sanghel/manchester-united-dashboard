import type { Meta, StoryObj } from '@storybook/react'
import { ScoreCard } from './ScoreCard'

const meta: Meta<typeof ScoreCard> = {
  title: 'UI/Cards/ScoreCard',
  component: ScoreCard,
  tags: ['autodocs'],
  args: {
    homeTeam: { name: 'Manchester United', abbreviation: 'MUN' },
    awayTeam: { name: 'Arsenal', abbreviation: 'ARS' },
    league: 'Premier League',
  },
}

export default meta
type Story = StoryObj<typeof ScoreCard>

export const Live: Story = {
  args: {
    status: 'live',
    homeScore: 1,
    awayScore: 1,
    time: "67'",
  },
}

export const Finished: Story = {
  args: {
    status: 'finished',
    homeScore: 2,
    awayScore: 1,
  },
}

export const Upcoming: Story = {
  args: {
    status: 'upcoming',
    time: 'Today 20:00',
  },
}

export const Postponed: Story = {
  args: { status: 'postponed' },
}

export const Interactive: Story = {
  args: {
    status: 'finished',
    homeScore: 3,
    awayScore: 0,
    onClick: () => alert('Card clicked'),
  },
}

export const WithLogos: Story = {
  args: {
    status: 'live',
    homeScore: 0,
    awayScore: 2,
    time: "23'",
    homeTeam: {
      name: 'Manchester United',
      abbreviation: 'MUN',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
    },
    awayTeam: {
      name: 'Arsenal',
      abbreviation: 'ARS',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
    },
  },
}
