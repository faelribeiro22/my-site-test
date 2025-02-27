/**
 * @summary Subscribe to event
 */
export const getProductsUrl = () => {


  return 'https://fakestoreapi.in/api/products'
}

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export type GetProducts201 = {
  status: number
  message: string
  products: Product[]
}

export type ProductsParamsProps = {
  limit?: number
  page?: number
}

export const getAllProducts = async (options?: RequestInit): Promise<Product[]> => {
  
  const res = await fetch(getProductsUrl(),
  {      
    ...options,
    method: 'GET',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: GetProducts201 = body ? JSON.parse(body) : {}

  return data.products
}