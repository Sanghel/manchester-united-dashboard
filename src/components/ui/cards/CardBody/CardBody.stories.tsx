import type { Meta, StoryObj } from '@storybook/react'
import { CardBody } from './CardBody'

const meta: Meta<typeof CardBody> = {
  title: 'UI/Cards/CardBody',
  component: CardBody,
  tags: ['autodocs'],
  args: {
    children: 'Body content',
  },
}

export default meta
type Story = StoryObj<typeof CardBody>

export const Default: Story = {}

export const Compact: Story = {
  args: { compact: true },
}

export const NoPadding: Story = {
  args: { noPadding: true },
}

export const WithMaxHeight: Story = {
  args: {
    maxHeight: '150px',
    children: (
      <div>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="py-1 text-sm text-gray-700">
            Row {i + 1}
          </p>
        ))}
      </div>
    ),
  },
}
