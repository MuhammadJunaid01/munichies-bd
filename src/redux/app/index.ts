import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cart from "../slices/cart";
import { productsApi } from "../slices/productsSlice";
import toggleMode from "../slices/toggleModeSlice";

export const store = configureStore({
  reducer: {
    toggleMode: toggleMode,
    cart: cart,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
