import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type ToggleType = {
  mode: string
}
const initialState: ToggleType = {
  mode: 'light',
}

export const toggleModeSlice = createSlice({
  name: 'toggleMode',
  initialState,
  reducers: {
    toggleMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload
    },
  },
})
export const { toggleMode } = toggleModeSlice.actions
export default toggleModeSlice.reducer
