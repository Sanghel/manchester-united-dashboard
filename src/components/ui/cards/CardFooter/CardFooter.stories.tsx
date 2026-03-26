import type { Meta, StoryObj } from '@storybook/react'
import { CardFooter } from './CardFooter'

const meta: Meta<typeof CardFooter> = {
  title: 'UI/Cards/CardFooter',
  component: CardFooter,
  tags: ['autodocs'],
  args: {
    children: (
      <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded-lg">Action</button>
    ),
  },
}

export default meta
type Story = StoryObj<typeof CardFooter>

export const Default: Story = {}

export const WithDivider: Story = {
  args: { divider: true },
}

export const JustifyEnd: Story = {
  args: { justify: 'end' },
}

export const JustifyCenter: Story = {
  args: { justify: 'center' },
}

export const JustifyBetween: Story = {
  args: {
    justify: 'between',
    children: (
      <>
        <button className="text-sm text-gray-500">Cancel</button>
        <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded-lg">Confirm</button>
      </>
    ),
  },
}
