import { combineReducers, configureStore } from "@reduxjs/toolkit"
import currentWeatherSliceReducer from "./slices/currentWeatherSlice"
import weeklyWeatherSliceReducer from "./slices/weeklyWeatherSlice"
import switchParamsReducer from "./slices/switchParams"
import switchTempUnitReducer from "./slices/switchTempUnit"

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  weeklyWeatherSliceReducer,
  switchParamsReducer,
  switchTempUnitReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
