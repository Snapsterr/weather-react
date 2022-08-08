import React from "react"
import { useSelector } from "react-redux"

import "./Details.scss"

const Details = ({ tempUnit, toFarenheit }) => {
  const { weather } = useSelector((state) => state.weeklyWeatherSliceReducer)

  const { description, icon } = weather.current.weather[0]
  const { humidity, uvi, visibility, feels_like } = weather.current

  const checkUVIndex = (uvi) => {
    let result = ""
    if (uvi >= 0 && 2.99 >= uvi) {
      result = "(Low)"
    } else if (uvi >= 3 && 5.99 >= uvi) {
      result = "(Moderate)"
    } else if (uvi >= 6 && 7.99 >= uvi) {
      result = "(High)"
    } else if (uvi >= 8 && 10.99 >= uvi) {
      result = "(Very high)"
    } else if (uvi >= 11) {
      result = "(Extreme)"
    }
    return result
  }

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
            <span>
              {tempUnit === "Celsius"
                ? feels_like.toFixed(1)
                : toFarenheit(feels_like)}
              °
            </span>
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
            <span>
              {uvi.toFixed(1)} {checkUVIndex(uvi)}
            </span>
          </div>
        </div>
      </div>
      <div className="details__bottom">
        <p>Some useful information about city what I didn't found</p>
      </div>
    </div>
  )
}

export default Details
