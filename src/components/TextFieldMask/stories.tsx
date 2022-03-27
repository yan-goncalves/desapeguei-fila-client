import { Meta, Story } from '@storybook/react/types-6-0'
import TextFieldMask, { TextFieldMaskProps } from '.'

export default {
  title: 'TextFieldMask',
  component: TextFieldMask,
  args: {
    placeholder: 'Nome',
    type: 'text',
    disabled: false
  },
  argTypes: {
    disabled: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story<TextFieldMaskProps> = (args) => <TextFieldMask {...args} />