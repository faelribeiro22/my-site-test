import Base from '../Base'
import { getAllProducts } from "../../app/resources/dataFetch";
import { Grid } from '@/components/Grid';
import ProductCard from '@/components/ProductCard';
import ProductList from '@/components/ProductList';


export type HomeTemplateProps = {
}

const Home = async () => {
  const products = await getAllProducts()
  
  return (
  <Base>
    <ProductList products={products}/>
  </Base>
)}

export default Home
