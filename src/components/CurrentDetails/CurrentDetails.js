import React from "react"
import { useSelector } from "react-redux"

import "./CurrentDetails.scss"

const CurrentDetails = () => {
  const { weather } = useSelector((state) => state.weeklyWeatherSliceReducer)

  const { description, icon } = weather.current.weather[0]
  const { humidity, uvi, visibility, feels_like } = weather.current

  return (
    <div className="details">
      <div className="details__title">Details</div>
      <div className="details__block">
        <div className="details__left">
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt={description}
          />
        </div>
        <div className="details__right">
          <div className="details__stat">
            <span>Feels like</span>
            <span>{feels_like.toFixed(1)}°</span>
          </div>

          <div className="details__stat">
            <span>Humidity</span>
            <span>{humidity}%</span>
          </div>

          <div className="details__stat">
            <span>Visibility</span>
            <span>{visibility} m</span>
          </div>

          <div className="details__stat">
            <span>UV Index</span>
            <span>{uvi} (Low)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentDetails
