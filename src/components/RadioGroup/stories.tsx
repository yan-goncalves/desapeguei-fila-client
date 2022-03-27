import { Meta, Story } from '@storybook/react/types-6-0'
import TextField from 'components/TextField'
import RadioGroup, { RadioGroupProps } from '.'

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  parameters: {
    backgrounds: {
      default: 'form'
    }
  },
  args: {
    labels: [
      {
        name: 'Instagram'
      },
      {
        name: 'Whatsapp'
      },
      {
        name: 'Indicação'
      },
      {
        name: 'Outro',
        whenChecked: <TextField placeholder={'Outro'} />
      }
    ],
    name: 'season'
  }
} as Meta

export const Default: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args} />
)
