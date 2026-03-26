import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'UI/Cards/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'Card content goes here',
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}

export const Elevated: Story = {
  args: { variant: 'elevated' },
}

export const Outlined: Story = {
  args: { variant: 'outlined' },
}

export const Interactive: Story = {
  args: { variant: 'interactive', onClick: () => alert('Clicked!') },
}

export const WithPadding: Story = {
  args: { padding: 'md', children: 'Card with medium padding' },
}

export const Hoverable: Story = {
  args: { hoverable: true },
}
