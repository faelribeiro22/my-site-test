import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import ProductInfo from '.'

const props = {
  title: 'product Title 2',
  description: 'the new product new',
  price: '210,00',
  img: 'https://source.unsplash.com/user/willianjusten/300x140'
}

describe('<ProductInfo />', () => {
  it('should render product information', () => {
    const { container } = renderWithTheme(<ProductInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /product title 2/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/\$210,00/)).toBeInTheDocument()
    expect(screen.getByText(/the new product new/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<ProductInfo {...props} />)
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
