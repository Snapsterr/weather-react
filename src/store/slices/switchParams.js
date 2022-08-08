import { createSlice } from "@reduxjs/toolkit"
import { controlStorage } from "../../helpers/controlStorage"

const initialState = {
  time: controlStorage.getItem("time") || "EU",
  isTimeChecked: controlStorage.getItem("isTimeChecked") || false,
  theme: controlStorage.getItem("theme") || "dark",
  isThemeChecked: controlStorage.getItem("isThemeChecked") || false,
}

const switchParams = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    toggleTime: (state, action) => {
      state.time = action.payload
      state.isTimeChecked = !state.isTimeChecked
    },
    toggleTheme: (state, action) => {
      state.theme = action.payload
      state.isThemeChecked = !state.isThemeChecked
    },
  },
})

export const toggleTime = switchParams.actions.toggleTime
export const toggleTheme = switchParams.actions.toggleTheme

export default switchParams.reducer
