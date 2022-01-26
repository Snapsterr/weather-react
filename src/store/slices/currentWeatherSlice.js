import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  lon: 0,
  lat: 0,
  cityName: "",
  cityCountry: "",
  isLoading: false,
  response: {
    status: 0,
    message: "",
  },
}

export const currentWeatherSlice = createSlice({
  name: "current-weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true
    },
    fetchCurrentWeatherSuccess(state, action) {
      state.isLoading = false
      state.lon = action.payload.data.coord.lon
      state.lat = action.payload.data.coord.lat
      state.cityName = action.payload.data.name
      state.cityCountry = action.payload.data.sys.country
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
    fetchCurrentWeatherError(state, action) {
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      }
    },
  },
})

export default currentWeatherSlice.reducer
