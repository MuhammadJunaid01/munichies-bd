import { configureStore } from '@reduxjs/toolkit'
import toggleMode from '../slices/toggleModeSlice'

export const store = configureStore({
  reducer: {
    toggleMode: toggleMode,
  },
})
export type RootStore = ReturnType<typeof store.getState>
