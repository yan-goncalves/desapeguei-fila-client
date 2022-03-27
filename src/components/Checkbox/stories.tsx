import { Meta, Story } from '@storybook/react/types-6-0'
import Checkbox from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: 'form'
    }
  },
  args: {
    label: 'label'
  }
} as Meta

export const Default: Story = (args) => <Checkbox {...args} />
