import type { Meta, StoryObj } from '@storybook/react'
import { Spacer } from './Spacer'

const meta: Meta<typeof Spacer> = {
  title: 'UI/Layout/Spacer',
  component: Spacer,
  tags: ['autodocs'],
}

export default meta

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
        <div key={size} className="flex items-center gap-2">
          <span className="text-xs text-gray-500 w-8">{size}</span>
          <div className="bg-blue-200 inline-block">
            <Spacer size={size} />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const FlexSpacer: StoryObj = {
  render: () => (
    <div className="flex bg-gray-100 p-4 rounded w-full border">
      <div className="bg-blue-200 px-3 py-1 rounded text-sm">Logo</div>
      <Spacer flex />
      <div className="bg-blue-200 px-3 py-1 rounded text-sm">Nav</div>
    </div>
  ),
}
