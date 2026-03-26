import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'UI/Layout/Container',
  component: Container,
  tags: ['autodocs'],
  args: {
    children: (
      <div className="bg-blue-50 border border-blue-200 p-4 rounded text-blue-700 text-sm text-center">
        Container content
      </div>
    ),
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {}
export const Small: Story = { args: { maxWidth: 'sm' } }
export const Medium: Story = { args: { maxWidth: 'md' } }
export const Large: Story = { args: { maxWidth: 'lg' } }
export const ExtraLarge: Story = { args: { maxWidth: 'xl' } }
export const Full: Story = { args: { maxWidth: 'full' } }
