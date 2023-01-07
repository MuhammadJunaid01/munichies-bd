import { HomeKitchenProps } from '../../types'

const HomeKitchen = (props: HomeKitchenProps) => {
  const { title, button, products } = props
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-light)',
        marginTop: '100px',
        padding: '0px 30px',
      }}
    >
      <div className="title">
        <p
          style={{
            fontSize: '24px',
            lineHeight: '24px',
            color: '#000000',
            margin: '10px 0px',
          }}
        >
          {title}
        </p>
      </div>
      <div>{button}</div>
      {products}
    </div>
  )
}

export default HomeKitchen
