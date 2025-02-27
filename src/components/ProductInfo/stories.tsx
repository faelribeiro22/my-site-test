import { Meta, StoryObj } from '@storybook/react'
import ProductInfo, { ProductInfoProps } from '.'

const meta: Meta<ProductInfoProps> = {
  title: 'Product/ProductInfo',
  component: ProductInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    price: {
      type: 'string'
    },
    image: {
      type: 'string'
    }
  }
}

export default meta

export const Default: StoryObj = {}

export const Basic: StoryObj<ProductInfoProps> = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
      <ProductInfo {...args} />
    </div>
  )
}

Basic.args = {
  title: 'A new Phone',
  description: 'A new phone with the best features',
  image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1jyc.jpg',
  price: 'R$ 235,00'
}
