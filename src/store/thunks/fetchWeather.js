import { WeatherService } from "../../services/WeatherService"
import { currentWeatherSlice } from "../slices/currentWeatherSlice"
import { weeklyWeatherSlice } from "../slices/weeklyWeatherSlice"

export const fetchWeather = (payload) => async (dispatch) => {
  try {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather())
    const res = await WeatherService.getCurrentWeather(payload)
    if (res.status === 200) {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res))
    } else {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res))
    }
    dispatch(weeklyWeatherSlice.actions.fetchWeeklyWeather())
    const res2 = await WeatherService.getWeeklyWeather(
      res.data.coord.lon,
      res.data.coord.lat
    )
    if (res.status === 200) {
      dispatch(weeklyWeatherSlice.actions.fetchWeeklyWeatherSuccess(res2))
    } else {
      dispatch(weeklyWeatherSlice.actions.fetchWeeklyWeatherError(res2))
    }
  } catch (error) {
    console.log(error)
  }
}
