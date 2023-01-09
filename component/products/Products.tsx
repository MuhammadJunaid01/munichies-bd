import { useGetAllProductsQuery } from '../../redux/slices/productsSlie'
import { ProductsProps } from '../../types'
import Product from '../product/Product'

const Products = (props: ProductsProps) => {
  const { filterOption } = props
  const { data } = useGetAllProductsQuery('productsAPi')

  return (
    <div>
      <div style={{ padding: '20px 100px' }}>{filterOption}</div>
      <div>
        <Product data={data} />
      </div>
    </div>
  )
}

export default Products
