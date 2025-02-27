import ProductInfo from '@/components/ProductInfo'
import React from 'react'
import Base from '../Base'

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>
}

const Product = async (props: ProductPageProps) => {
  const { id } = await props.params;
  return (
    <Base>
      <ProductInfo />
    </Base>
  )
}

export default Product