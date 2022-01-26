import React from "react"
import { useSelector } from "react-redux"
import "./CurrentWeatherInfo.scss"

const CurrentWeatherInfo = () => {
  const { weather } = useSelector((state) => state.weeklyWeatherSliceReducer)

  const { temp } = weather.current
  const { description, icon, main } = weather.current.weather[0]
  const { min, max } = weather.daily[0].temp

  console.log(weather)

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
        <div className="current-weather__temp-max">{max.toFixed(1)}°</div>
        <div className="current-weather__temp-min">{min.toFixed(1)}°</div>
      </div>
      <div className="current-weather__temp-actually">
        <div className="current-weather__temp-current">{temp.toFixed(1)}°</div>
        <div className="current-weather__temp-units">
          <div className="current-weather__fahrenheit">F</div>
          <div className="current-weather__celsius active">C</div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeatherInfo
