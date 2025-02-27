'use client'
import ProductInfo, { ProductInfoProps } from '@/components/ProductInfo'
import React from 'react'
import Base from '../Base'
import { currencyFormat } from '@/utils/currencyFormatter'

const Product = ({
  category,
  description,
  image,
  price,
  title
}: ProductInfoProps) => {
  return (
    <Base>
      <ProductInfo
        category={category}
        description={description}
        image={image || 'https://placehold.co/600x400.png'}
        price={currencyFormat(Number(price))}
        title={title}
      />
    </Base>
  )
}

export default Product
