import { Col, Row } from 'antd'
import style from '../../styles/product.module.css'
import { ProductProps } from '../../types'
import Card from '../card/Card'
const Product = (props: ProductProps) => {
  const { data } = props
  return (
    <div className={style.container}>
      <Row gutter={[16, 16]}>
        {data?.map((data, index) => {
          return (
            <Col key={index} sm={24} md={8} lg={6}>
              <div>
                <Card
                  id={data.id}
                  name={data.name}
                  price={data.price}
                  quantity_available={data.quantity_available}
                  image={data.image}
                  vat={data.vat}
                  addons={data.addons}
                />
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Product
