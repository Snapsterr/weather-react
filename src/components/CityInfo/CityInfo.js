import React from "react"
import { useSelector } from "react-redux"

import "./CityInfo.scss"

const CityInfo = ({ getLocalTime }) => {
  const { cityName, cityCountry } = useSelector(
    (state) => state.currentWeatherSliceReducer
  )

  const { weather } = useSelector((state) => state.weeklyWeatherSliceReducer)
  const { dt } = weather.current
  const { timezone_offset } = weather

  return (
    <div className="current-city">
      <div className="current-city__info">
        {cityName}, {cityCountry}
      </div>
      <div className="current-city__local-time">
        {getLocalTime(dt, timezone_offset)}
      </div>
    </div>
  )
}

export default CityInfo
