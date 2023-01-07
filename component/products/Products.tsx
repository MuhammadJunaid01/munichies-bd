import { ProductsProps } from '../../interfaces'
import { useGetAllProductsQuery } from '../../redux/slices/productsSlie'
import Product from '../product/Product'

const Products = (props: ProductsProps) => {
  const { filterOption } = props
  const { data } = useGetAllProductsQuery('productsAPi')

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
