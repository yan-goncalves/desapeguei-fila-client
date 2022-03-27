import { Meta, Story } from '@storybook/react/types-6-0'
import { TextFieldMaskProps } from 'components/TextFieldMask'
import TextField from '.'

export default {
  title: 'TextField',
  component: TextField,
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

export const Default: Story<TextFieldMaskProps> = (args) => (
  <TextField {...args} />
)

Default.parameters = {
  backgrounds: {
    default: 'form'
  }
}
