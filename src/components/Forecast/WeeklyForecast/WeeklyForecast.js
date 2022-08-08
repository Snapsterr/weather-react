import React from "react"
import { time } from "../../../helpers/time"

import "./WeeklyForecast.scss"

const WeeklyForecast = ({ weather, tempUnit, toFarenheit }) => {
  const { daily } = weather

  return (
    <div className="weekly-forecast">
      <div className="weekly-forecast__titles">
        <div className="weekly-forecast__title">Day</div>
        <div className="weekly-forecast__title">Conditions</div>
        <div className="weekly-forecast__title">Humidity</div>
        <div className="weekly-forecast__title">Max. temp.</div>
        <div className="weekly-forecast__title">Min. temp.</div>
      </div>
      <div className="weekly-forecast__block">
        {daily.map((day, id) => {
          return (
            <div className="weekly-forecast__wrapper" key={id} id={id}>
              <div className="weekly-forecast__param weekly-forecast__param--day">
                {time.getDay(day.dt, weather.timezone_offset)}
              </div>
              <div className="weekly-forecast__clouds">
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                />
              </div>
              <div className="weekly-forecast__param">{day.humidity}%</div>
              <div className="weekly-forecast__param">
                {tempUnit === "Celsius"
                  ? day.temp.max.toFixed(1)
                  : toFarenheit(day.temp.max)}
                °
              </div>
              <div className="weekly-forecast__param">
                {tempUnit === "Celsius"
                  ? day.temp.min.toFixed(1)
                  : toFarenheit(day.temp.min)}
                °
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(WeeklyForecast)
