import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTemp } from "../../store/slices/switchTempUnit"

import "./CurrentWeather.scss"

const CurrentWeather = ({ tempUnit, toFarenheit }) => {
  const dispatch = useDispatch()
  const { weather } = useSelector((state) => state.weeklyWeatherSliceReducer)

  const { temp } = weather.current
  const { description, icon, main } = weather.current.weather[0]
  const { min, max } = weather.daily[0].temp

  const switchToFarehneit = (e) => {
    dispatch(toggleTemp("Farenheit"))
  }

  const switchToCelsius = (e) => {
    dispatch(toggleTemp("Celsius"))
  }

  return (
    <div className="current-weather">
      <div className="current-weather__clouds">
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
        />
        <div className="current-weather__main">{main}</div>
      </div>
      <div className="current-weather__temp-spread">
        <div className="current-weather__temp-range">
          {tempUnit === "Celsius" ? max.toFixed(1) : toFarenheit(max, false)}°
        </div>
        <div className="current-weather__temp-range">
          {tempUnit === "Celsius" ? min.toFixed(1) : toFarenheit(min, false)}°
        </div>
      </div>
      <div className="current-weather__temp-actually">
        <div className="current-weather__temp-current">
          {tempUnit === "Celsius" ? temp.toFixed(1) : toFarenheit(temp, true)}°
        </div>
        <div className="current-weather__temp-units">
          <button
            className={
              tempUnit === "Farenheit"
                ? "current-weather__unit active"
                : "current-weather__unit"
            }
            onClick={switchToFarehneit}
          >
            F
          </button>
          <button
            className={
              tempUnit === "Celsius"
                ? "current-weather__unit active"
                : "current-weather__unit"
            }
            onClick={switchToCelsius}
          >
            C
          </button>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
