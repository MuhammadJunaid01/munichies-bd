import { PlusOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cart'
import style from '../../styles/card.module.css'
import { CardProps } from '../../types'

const Card = (props: CardProps) => {
  const { id, image, vat, name, addons, price } = props
  const dispatch = useDispatch()
  const product = {
    id: id,
    iamge: image,
    vat: vat,
    name: name,
    addons: addons,
    price,
  }

  const handleAddTocart = (params: {
    id: number
    iamge: string
    vat: number
    name: string
    addons: { name: string; is_default?: boolean | undefined; price: number }[]
    price: string
  }) => {
    dispatch(addToCart(params))
  }

  return (
    <div className={style.card}>
      <Image
        style={{ borderRadius: '10px 10px 0px 0px' }}
        src={image}
        width={277}
        height={220}
        alt="product image"
      />
      <div className={style.content}>
        <p>{name}</p>
        <p>${vat}</p>
      </div>
      <div style={{ padding: '0px 14px', textAlign: 'end' }}>
        <p>
          <PlusOutlined
            onClick={() => handleAddTocart(product)}
            style={{
              cursor: 'pointer',
              backgroundColor: 'var(--bg-secoundary)',
              color: 'white',
              marginTop: '5px',
            }}
          />
        </p>
      </div>
    </div>
  )
}

export default Card
