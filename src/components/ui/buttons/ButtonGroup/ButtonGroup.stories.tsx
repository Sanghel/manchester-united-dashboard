import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { ButtonGroup } from './ButtonGroup'

const meta: Meta<typeof ButtonGroup> = {
  title: 'UI/Buttons/ButtonGroup',
  component: ButtonGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </ButtonGroup>
  ),
}

export const Attached: Story = {
  render: () => (
    <ButtonGroup attached>
      <Button variant="outline">Previous</Button>
      <Button variant="outline">Current</Button>
      <Button variant="outline">Next</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">NBA</Button>
      <Button variant="outline">NFL</Button>
      <Button variant="outline">MLB</Button>
    </ButtonGroup>
  ),
}
