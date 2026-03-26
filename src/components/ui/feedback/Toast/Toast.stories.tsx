import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, useToast, type ToastVariant } from './Toast'

const meta: Meta = {
  title: 'UI/Feedback/Toast',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
}

export default meta

function ToastDemo({ variant, message }: { variant: ToastVariant; message: string }) {
  const { addToast } = useToast()
  return (
    <button
      onClick={() => addToast(message, variant, 4000)}
      className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium"
    >
      Show {variant} toast
    </button>
  )
}

export const Success: StoryObj = {
  render: () => <ToastDemo variant="success" message="Match score updated!" />,
}

export const Error: StoryObj = {
  render: () => <ToastDemo variant="error" message="Failed to load scores." />,
}

export const Warning: StoryObj = {
  render: () => <ToastDemo variant="warning" message="Connection unstable." />,
}

export const Info: StoryObj = {
  render: () => <ToastDemo variant="info" message="Fetching live data..." />,
}

function AllVariantsDemo() {
  const { addToast } = useToast()
  return (
    <div className="flex gap-2">
      <button
        onClick={() => addToast('Saved!', 'success', 4000)}
        className="px-3 py-1.5 bg-green-600 text-white rounded text-sm"
      >
        Success
      </button>
      <button
        onClick={() => addToast('Error!', 'error', 4000)}
        className="px-3 py-1.5 bg-red-600 text-white rounded text-sm"
      >
        Error
      </button>
      <button
        onClick={() => addToast('Warning!', 'warning', 4000)}
        className="px-3 py-1.5 bg-yellow-500 text-white rounded text-sm"
      >
        Warning
      </button>
      <button
        onClick={() => addToast('Info!', 'info', 4000)}
        className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm"
      >
        Info
      </button>
    </div>
  )
}

export const AllVariants: StoryObj = {
  render: () => <AllVariantsDemo />,
}
