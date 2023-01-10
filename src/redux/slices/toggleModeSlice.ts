import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Toggle } from "../../types/index";

const initialState: Toggle = {
  mode: "light",
};

export const toggleModeSlice = createSlice({
  name: "toggleMode",
  initialState,
  reducers: {
    toggleMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});
export const { toggleMode } = toggleModeSlice.actions;
export default toggleModeSlice.reducer;
