import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
)

const meta: Meta<typeof IconButton> = {
  title: 'UI/Buttons/IconButton',
  component: IconButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { icon: <TrashIcon />, ariaLabel: 'Delete item' } }
export const Rounded: Story = {
  args: { icon: <TrashIcon />, ariaLabel: 'Delete', shape: 'rounded', variant: 'danger' },
}
export const Danger: Story = {
  args: { icon: <TrashIcon />, ariaLabel: 'Delete', variant: 'danger' },
}
export const Disabled: Story = {
  args: { icon: <TrashIcon />, ariaLabel: 'Delete', disabled: true },
}
