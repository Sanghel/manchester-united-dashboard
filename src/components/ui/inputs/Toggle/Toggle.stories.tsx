import type { Meta, StoryObj } from '@storybook/react'
import { Toggle } from './Toggle'

const meta: Meta<typeof Toggle> = {
  title: 'UI/Inputs/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    labelPosition: { control: 'select', options: ['left', 'right'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Enable live scores' },
}

export const Checked: Story = {
  args: { label: 'Dark mode', defaultChecked: true },
}

export const Disabled: Story = {
  args: { label: 'Disabled toggle', disabled: true },
}

export const LabelLeft: Story = {
  args: { label: 'Label left', labelPosition: 'left' },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Toggle label="Small" size="sm" />
      <Toggle label="Medium" size="md" />
      <Toggle label="Large" size="lg" />
    </div>
  ),
}
