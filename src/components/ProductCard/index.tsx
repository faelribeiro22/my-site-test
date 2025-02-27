import {
  AddShoppingCart,
} from '@styled-icons/material-outlined'

import Button from '../Button'
import * as S from './styles'
import Link from 'next/link'

export type ProductCardProps = {
  id: number
  title: string
  description: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
}

const ProductCard = ({
  id,
  title,
  description,
  img,
  price,
  promotionalPrice,
}: ProductCardProps) => (
  <S.Wrapper>
    <Link href={`product/${id}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <S.Info>
        <S.Title title={title}>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default ProductCard
