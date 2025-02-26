import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material'
import Button, { ButtonProps } from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'string'
    }
  }
}


export default meta

export const Default: StoryObj = {}

export const Basic: StoryObj<ButtonProps> = (args: any) => <Button {...args} />

Basic.args = {
  children: 'Buy Now'
}

export const withIcon: StoryObj = (args: any) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}

export const asLink: StoryObj = (args: any) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: 'a',
  href: '/teste'
}
