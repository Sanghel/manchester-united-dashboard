import type { Meta, StoryObj } from '@storybook/react'
import { TeamCard } from './TeamCard'

const meta: Meta<typeof TeamCard> = {
  title: 'UI/Cards/TeamCard',
  component: TeamCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TeamCard>

export const Default: Story = {
  args: {
    name: 'Manchester United',
    abbreviation: 'MUN',
    league: 'Premier League',
  },
}

export const WithStats: Story = {
  args: {
    name: 'Manchester United',
    abbreviation: 'MUN',
    league: 'Premier League',
    record: '22W 8L 5D',
    position: 3,
    points: 71,
  },
}

export const Interactive: Story = {
  args: {
    name: 'Manchester United',
    abbreviation: 'MUN',
    league: 'Premier League',
    position: 3,
    points: 71,
    onClick: () => alert('Team clicked'),
  },
}

export const WithLogo: Story = {
  args: {
    name: 'Manchester United',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
    league: 'Premier League',
    position: 3,
    points: 71,
  },
}
