import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll"
import Select from "../../UI/Select/Select"

import "./ForecastInfo.scss"
import WeeklyForecastInfo from "./WeeklyForecastInfo/WeeklyForecastInfo"

const ForecastInfo = ({ getLocalTime, getDay }) => {
  const options = [
    { name: "temperature", value: 1 },
    { name: "humidity", value: 2 },
    { name: "pressure", value: 3 },
  ]

  const [selectedValue, setSelectedValue] = useState(options[0].name)

  const { weather } = useSelector((state) => state.weeklyWeatherSliceReducer)
  const dayHourly = weather.hourly.slice(0, 24)

  const { timezone_offset } = weather

  const scrollRef = useHorizontalScroll()

  return (
    <div className="forecast">
      <div className="forecast__title">Forecast</div>
      <div className="forecast__current-stat">
        <Select
          options={options}
          value={selectedValue}
          onChangeValue={setSelectedValue}
        />
        <div className="forecast__selected-stat" ref={scrollRef}>
          {dayHourly.map((item) => {
            return (
              <div className="item" key={item.dt}>
                <div className="item__title">
                  {getLocalTime(item.dt, timezone_offset)}
                </div>
                <img
                  className="item__icon"
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                />
                <div className="item__bottom">{item.temp.toFixed(1)}°</div>
              </div>
            )
          })}
        </div>
      </div>
      <WeeklyForecastInfo weather={weather} getDay={getDay} />
    </div>
  )
}

export default ForecastInfo
