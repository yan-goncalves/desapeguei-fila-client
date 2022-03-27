import { Meta, Story } from '@storybook/react/types-6-0'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import FormControlLabel from '.'

export default {
  title: 'FormControlLabel',
  component: FormControlLabel,
  parameters: {
    backgrounds: {
      default: 'form'
    }
  },
  args: {
    label: 'Label',
    control: 'Radio'
  },
  argTypes: {
    control: {
      options: ['Radio', 'Checkbox']
    }
  }
} as Meta

export const Default: Story<{ control: string; label: string }> = ({
  control,
  label
}) => {
  return (
    <FormControlLabel
      value={label}
      label={label}
      control={control === 'Radio' ? <Radio /> : <Checkbox />}
    />
  )
}
