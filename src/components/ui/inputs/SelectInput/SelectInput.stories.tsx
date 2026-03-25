import type { Meta, StoryObj } from '@storybook/react'
import { SelectInput } from './SelectInput'

const leagueOptions = [
  { value: 'nba', label: 'NBA' },
  { value: 'nfl', label: 'NFL' },
  { value: 'mlb', label: 'MLB' },
  { value: 'nhl', label: 'NHL' },
]

const meta: Meta<typeof SelectInput> = {
  title: 'UI/Inputs/SelectInput',
  component: SelectInput,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'League', options: leagueOptions, placeholder: 'Select a league' },
}

export const WithError: Story = {
  args: {
    label: 'League',
    options: leagueOptions,
    error: true,
    errorMessage: 'Please select a league',
  },
}

export const Disabled: Story = {
  args: {
    label: 'League',
    options: leagueOptions,
    disabled: true,
    value: 'nba',
    onChange: () => {},
  },
}
