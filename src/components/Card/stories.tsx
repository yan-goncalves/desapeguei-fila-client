import { Meta, Story } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    num: 1,
    title: 'Seleção',
    subtitle: 'Selecione tudo o que você deseja desapegar',
    img: 'selection'
  }
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />
