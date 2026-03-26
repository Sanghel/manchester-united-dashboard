import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './Stack'

const meta: Meta<typeof Stack> = {
  title: 'UI/Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
}

export default meta

function Box({ label }: { label: string }) {
  return (
    <div className="bg-primary-50 border border-primary-200 rounded px-3 py-2 text-primary-700 text-sm">
      {label}
    </div>
  )
}

export const Vertical: StoryObj = {
  render: () => (
    <Stack spacing="md">
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
}

export const Horizontal: StoryObj = {
  render: () => (
    <Stack direction="horizontal" spacing="md">
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
}

export const SmallSpacing: StoryObj = {
  render: () => (
    <Stack spacing="sm">
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
}

export const CenterAligned: StoryObj = {
  render: () => (
    <Stack direction="horizontal" spacing="md" align="center">
      <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white text-xs">
        MU
      </div>
      <div>
        <p className="font-semibold text-gray-900">Manchester United</p>
        <p className="text-xs text-gray-500">Premier League</p>
      </div>
    </Stack>
  ),
}
