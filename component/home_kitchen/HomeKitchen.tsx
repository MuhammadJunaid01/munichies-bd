import { HomeKitchenProps } from '../../types'

const HomeKitchen = (props: HomeKitchenProps) => {
  const { title, button, products } = props
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-light)',
        margin: '0px',
      }}
    >
      <div className="title">
        <p style={style.title}>{title}</p>
      </div>
      <div>{button}</div>
      {products}
    </div>
  )
}
const style = {
  title: {
    fontSize: '24px',
    lineHeight: '24px',
    color: '#000000',
    margin: '10px 0px',
    paddingTop: '100px',
    paddingBottom: '0px',
    paddingLeft: '100px',
    paddingRight: '100px',
  },
}
export default HomeKitchen
