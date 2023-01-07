/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
interface state {
  cartItems: {
    id: number
    name: string
    price: number
    quantity_available: string
    image: string
    vat: number
    addons: { name: string; is_default?: boolean; price: number }[]
    quantity: number
    totalAmount: number
  }[]
  quantity: number
  totalAmount: number
}
const initialState: state = {
  cartItems: [],
  quantity: 0,
  totalAmount: 0,
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state?.cartItems?.find(
        (item) => item.id === action.payload.id
      )
      if (isExist) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            state.quantity = state.quantity + 1

            const update = {
              ...item,
              quantity: item.quantity + 1,
            }
            return update
          } else {
            return item
          }
        })
      } else {
        const update = {
          ...action.payload,
          quantity: 1,
        }
        // const updatedState = {
        //   ...(state.quantity = state.quantity + 1),
        //   ...update,
        // }
        localStorage.setItem('cartItems', JSON.stringify(state))
        state?.cartItems?.push(update)
      }
      const total = state?.cartItems?.map((item) => {
        return item.quantity * item.price
      })
      state.totalAmount = total.reduce((acc, prev) => {
        return acc + prev
      })
    },
    inceaseById: (state, action) => {
      state.cartItems = state?.cartItems?.map((item) => {
        if (action.payload === item.id) {
          state.quantity = state.quantity + 1
          const update = {
            ...item,
            quantity: item.quantity + 1,
          }
          localStorage.setItem('cartItems', JSON.stringify(state))
          return update
        } else {
          return item
        }
      })
    },
    // decreseById: (state, action) => {
    //   const currentState = current(state)
    //   state.cartItems = state.cartItems.map((item) => {
    //     if (item._id === action.payload._id) {
    //       if (action.payload.quantity > 1) {
    //         state.quantity = state.quantity - 1
    //         const update = {
    //           ...item,
    //           quantity: item.quantity - 1,
    //         }
    //         localStorage.setItem('cartItems', JSON.stringify(state))
    //         return update
    //       } else {
    //         return item
    //       }
    //     } else {
    //       return item
    //     }
    //   })
    // },
    // deleteById: (state, action) => {
    //   // console.log(action.payload);
    //   const currentState = current(state)

    //   const check = currentState.cartItems.includes(action.payload)
    //   if (check) {
    //     currentState.cartItems.map((item, index, arr) => {
    //       if (action.payload._id === item._id) {
    //         state.cartItems.splice(index, 1)
    //         localStorage.setItem('cartItems', JSON.stringify(state))
    //       }
    //     })
    //   }
    // },
    // getTotal: (state) => {
    //   const currentState = current(state)

    //   const test = currentState.cartItems.map((element) => {
    //     return element.quantity * element.price
    //   })
    //   const total = test.reduce((prev, next) => {
    //     return prev + next
    //   }, 0)
    // },
    // applyCopun: (state, action) => {
    //   console.log('copun apply payload', action.payload)
    //   const currentState = current(state)
    //   const find = currentState.cartItems.map((item) => {
    //     if (item.copunCode === action.payload) {
    //       // item.appliyed = "true";
    //       Object.assign({}, item, { applied: true })
    //       console.log('hello cart items match', item)
    //       const total = item.quantity * item.Price
    //       console.log('total price ', total)
    //       console.log('total price ', total / Number(item.percentage))
    //       return item
    //     }
    //   })
    //   // console.log("find items", find);
    // },
  },
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
