import { Meta, Story } from '@storybook/react/types-6-0'
import HelperText, { HelperTextProps } from '.'

export default {
  title: 'HelperText',
  component: HelperText
} as Meta

export const Default: Story<HelperTextProps> = (args) => (
  <HelperText {...args} />
)
