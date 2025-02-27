import { Meta, StoryObj } from '@storybook/react'
import ProductCard, { ProductCardProps } from '.'

const meta: Meta<ProductCardProps> = {
  title: 'ProductCard',
  component: ProductCard,
  argTypes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    img: {
      type: 'string'
    },
    price: {
      type: 'string'
    }
  }
}


export default meta

export const Default: StoryObj = {}

export const Basic: StoryObj<ProductCardProps> = (args: any) => <ProductCard {...args} />

Basic.args = {
  title: 'A new Phone',
  description: 'A new phone with the best features',
  img: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1jyc.jpg',
  price: 'R$ 235,00'
}
