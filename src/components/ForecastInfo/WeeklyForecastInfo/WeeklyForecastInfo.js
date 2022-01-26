import React from "react"

import "./WeeklyForecastInfo.scss"

const WeeklyForecastInfo = ({ weather, getDay }) => {
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
              <div className="weekly-forecast__day">
                {getDay(day.dt, weather.timezone_offset)}
              </div>
              <div className="weekly-forecast__clouds">
                <img
                  className="item__icon"
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                />
              </div>
              <div className="weekly-forecast__humidity">{day.humidity}%</div>
              <div className="weekly-forecast__max-temp">
                {day.temp.max.toFixed(1)}°
              </div>
              <div className="weekly-forecast__min-temp">
                {day.temp.min.toFixed(1)}°
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeeklyForecastInfo
