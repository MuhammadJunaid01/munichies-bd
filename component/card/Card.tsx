import { PlusOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cart'
import style from '../../styles/card.module.css'
import { CardProps } from '../../types'

const Card = (props: CardProps) => {
  const { id, image, vat, name, addons, price, starIcon, min } = props
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
        <p>${price}</p>
      </div>
      <div style={styleInjs.card_footer}>
        <div style={styleInjs.min_starbox}>
          <p style={styleInjs.rate_min}>
            {starIcon} <span style={{ marginLeft: '9px' }}>4.7</span>
          </p>
          <p style={styleInjs.rate_min}>{min} min</p>
        </div>
        <div>
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
      <div className={style.vat}>
        <p>${vat}</p>
      </div>
    </div>
  )
}
const styleInjs = {
  card_footer: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  min_starbox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
  },
  rate_min: {
    backgroundColor: '#F7F8FA',
    padding: '5px',
    borderRadius: '4px',
    fontFamily: 'SF Pro Text',
  },
}
export default Card
