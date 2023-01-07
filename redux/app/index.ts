import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import toggleMode from '../slices/toggleModeSlice'
import { productsApi } from './../slices/productsSlie'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

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
