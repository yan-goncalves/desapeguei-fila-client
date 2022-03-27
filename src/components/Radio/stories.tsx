import { Meta, Story } from '@storybook/react/types-6-0'
import Radio from '.'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    backgrounds: {
      default: 'form'
    }
  },
  args: {
    value: 'Label'
  }
} as Meta

export const Default: Story = (args) => <Radio {...args} />
