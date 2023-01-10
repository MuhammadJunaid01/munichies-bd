import { createSlice } from "@reduxjs/toolkit";
// import { Immutable } from 'immer'
import { toast } from "react-toastify";
import { CartstateType } from "../../types";

const initialState: CartstateType = {
  cartItems: [],
  quantity: 0,
  totalAmount: 0,
  isCartShow: false,
  isCartAdd: true,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.isCartAdd) {
        toast.warn(`quantity is finished`, {
          position: "top-center",
          autoClose: 1300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      const isExist = state?.cartItems?.find(
        (item) => item.id === action.payload.id
      );
      if (isExist) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            if (parseInt(item.quantity_available) <= state.quantity) {
              state.isCartAdd = false;
            }

            state.quantity = state.quantity + 1;

            const update = {
              ...item,
              quantity: item.quantity + 1,
            };
            toast.success(`quantity increase ${update.quantity}`, {
              position: "top-center",
              autoClose: 1300,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            return update;
          } else {
            return item;
          }
        });
      } else {
        const update = {
          ...action.payload,
          quantity: 1,
        };

        state?.cartItems?.push(update);
        toast.success("add to cart", {
          position: "top-center",
          autoClose: 1300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      const total = state?.cartItems?.map((item) => {
        return item.quantity * item.price;
      });
      const totalAmount = total.reduce((acc, prev) => {
        return acc + prev;
      });
      state.totalAmount = totalAmount;
      state.cartItems.map((item) => {
        const p = item.price * item.quantity;
        item.totalAmount = p;
      });
    },

    cartShow: (state) => {
      state.isCartShow = !state.isCartShow;
    },
  },
});
export const { addToCart, cartShow } = cartSlice.actions;
export default cartSlice.reducer;
