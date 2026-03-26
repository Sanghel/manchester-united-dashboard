import type { Meta, StoryObj } from '@storybook/react'
import { LeagueCard } from './LeagueCard'

const meta: Meta<typeof LeagueCard> = {
  title: 'UI/Cards/LeagueCard',
  component: LeagueCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LeagueCard>

export const Default: Story = {
  args: {
    name: 'Premier League',
    country: 'England',
  },
}

export const WithAllDetails: Story = {
  args: {
    name: 'Premier League',
    country: 'England',
    season: '2024/25',
    teamCount: 20,
  },
}

export const Interactive: Story = {
  args: {
    name: 'Premier League',
    country: 'England',
    season: '2024/25',
    teamCount: 20,
    onClick: () => alert('League clicked'),
  },
}

export const LaLiga: Story = {
  args: {
    name: 'La Liga',
    country: 'Spain',
    season: '2024/25',
    teamCount: 20,
  },
}

export const ChampionsLeague: Story = {
  args: {
    name: 'UEFA Champions League',
    country: 'Europe',
    season: '2024/25',
    teamCount: 32,
  },
}
