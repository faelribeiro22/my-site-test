import Button from '../Button'
import Heading from '../Heading'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import * as S from './styles'
import Image from 'next/image'
import { BuyBox, Price } from '../ProductCard/styles'

export type ProductInfoProps = {
  title: string
  description: string
  price: string
  image: string
  category: string
}

const ProductInfo = ({ title, description, price, image }: ProductInfoProps) => (
  <S.Wrapper>
    <Heading color="black" $lineBottom>
      {title}
    </Heading>
    <S.ContainerImage>
      <Image src={image} alt={title} fill={true}/>
    </S.ContainerImage>
    <S.Description>{description}</S.Description>

    <BuyBox>
      <Price>{`${price}`}</Price>
      <Button icon={<AddShoppingCart />} size="small">
        Add to cart
      </Button>
    </BuyBox>
  </S.Wrapper>
)

export default ProductInfo
