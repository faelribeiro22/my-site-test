import { getProduct } from "@/app/resources/dataFetch";
import Product from "@/templates/Product";

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>
}

const ProductPage = async (props: ProductPageProps) => {
  const { productId } = await props.params;
  const product = await getProduct(productId)

  return (
    <Product
      title={product.title}
      category={product.category}
      description={product.description}
      image={product.image}
      price={product.price}
    />
  )
}

export default ProductPage