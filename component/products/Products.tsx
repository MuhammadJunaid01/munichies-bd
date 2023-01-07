import { ProductsProps } from '../../interfaces'
import { useGetAllProductsQuery } from '../../redux/slices/productsSlie'
import Product from '../product/Product'

const Products = (props: ProductsProps) => {
  const { filterOption } = props
  const { data, error } = useGetAllProductsQuery('productsAPi')
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      <div>{filterOption}</div>
      <div>
        <Product data={data} />
      </div>
    </div>
  )
}

export default Products
