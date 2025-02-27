import { screen } from '@testing-library/react'
import theme from '../../styles/theme'
import { renderWithTheme } from '../../utils/tests/helpers'
import ProductCard from '.'

const props = {
  title: 'New Phone',
  description: 'A new phone with the best features',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<ProductCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProductCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByText('A new phone with the best features')
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
  })

  it('should render price in label', () => {
    renderWithTheme(<ProductCard {...props} />)

    const price = screen.getByText('R$ 235,00')
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<ProductCard {...props} promotionalPrice="R$ 15,00" />)
    expect(screen.getByText('R$ 15,00')).toBeInTheDocument()
    expect(screen.getByText(/235,00/)).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
