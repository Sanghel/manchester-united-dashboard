import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from './SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'UI/Inputs/SearchInput',
  component: SearchInput,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Search teams...' },
}

export const Loading: Story = {
  args: { placeholder: 'Searching...', loading: true },
}

export const WithValue: Story = {
  args: { value: 'NBA', placeholder: 'Search...', onChange: () => {} },
}

export const Disabled: Story = {
  args: { placeholder: 'Search...', disabled: true },
}
