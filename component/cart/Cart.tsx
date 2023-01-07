import { useSelector } from 'react-redux'
import { RootStore } from '../../redux/app'

const Cart = () => {
  const { cartItems } = useSelector((state: RootStore) => state.cart)
  console.log(cartItems)
  return (
    <div>
      <h1>hello cart</h1>
      {/* {cartItems?.map((data, index) => {
        return (
          <div key={index}>
            <h1>hhhhhhhhhhh</h1>
          </div>
        )
      })} */}
    </div>
  )
}

export default Cart
