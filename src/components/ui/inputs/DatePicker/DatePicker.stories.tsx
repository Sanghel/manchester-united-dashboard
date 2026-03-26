import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'UI/Inputs/DatePicker',
  component: DatePicker,
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
  args: { label: 'Match date' },
}

export const WithRange: Story = {
  args: { label: 'Match date', minDate: '2024-01-01', maxDate: '2024-12-31' },
}

export const WithError: Story = {
  args: { label: 'Match date', error: true, errorMessage: 'Date is required' },
}

export const Disabled: Story = {
  args: { label: 'Match date', value: '2024-06-15', disabled: true, onChange: () => {} },
}
