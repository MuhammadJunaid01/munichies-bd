import { PlusOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { CardProps } from '../../interfaces'
import style from '../../styles/card.module.css'
const Card = (props: CardProps) => {
  const { image, vat, name } = props

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
