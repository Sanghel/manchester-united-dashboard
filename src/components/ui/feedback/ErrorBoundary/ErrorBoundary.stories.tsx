import type { Meta, StoryObj } from '@storybook/react'
import { ErrorBoundary } from './ErrorBoundary'

const meta: Meta<typeof ErrorBoundary> = {
  title: 'UI/Feedback/ErrorBoundary',
  component: ErrorBoundary,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ErrorBoundary>

function GoodComponent() {
  return <p className="text-gray-700">Component rendered successfully.</p>
}

function BrokenComponent(): never {
  throw new Error('Intentional render error')
}

export const WithoutError: Story = {
  args: { children: <GoodComponent /> },
}

export const WithError: Story = {
  args: {
    children: <BrokenComponent />,
  },
}

export const WithCustomFallback: Story = {
  args: {
    children: <BrokenComponent />,
    fallback: (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
        <p className="font-semibold text-yellow-800">Oops! Something went wrong.</p>
        <button className="mt-2 text-sm text-yellow-700 underline">Retry</button>
      </div>
    ),
  },
}

export const WithFunctionFallback: Story = {
  args: {
    children: <BrokenComponent />,
    fallback: (error: Error) => <p className="text-red-600 text-sm">Error: {error.message}</p>,
  },
}
