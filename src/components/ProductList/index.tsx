'use client'
import React from 'react'
import { Grid } from '../Grid'
import ProductCard from '../ProductCard'
import { Product } from '@/app/resources/dataFetch'
import { currencyFormat } from '@/utils/currencyFormatter'

type ProductListProps = {
  products: Array<Product>
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <Grid>
    {products.map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        description={product.description}
        img={product.image}
        price={currencyFormat(product.price)}
        title={product.title}
      />
    ))}
    </Grid>
  )
}

export default ProductList