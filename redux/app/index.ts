import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import toggleMode from '../slices/toggleModeSlice'
import { productsApi } from './../slices/productsSlie'

export const store = configureStore({
  reducer: {
    toggleMode: toggleMode,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})
export type RootStore = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
