import { createSlice } from "@reduxjs/toolkit"
import { controlStorage } from "../../helpers/controlStorage"

const initialState = {
  tempUnit: controlStorage.getItem("temp") || "Celsius",
}

const switchTempUnit = createSlice({
  name: "temp-unit",
  initialState,
  reducers: {
    toggleTemp: (state, action) => {
      state.tempUnit = action.payload
    },
  },
})

export const toggleTemp = switchTempUnit.actions.toggleTemp

export default switchTempUnit.reducer
