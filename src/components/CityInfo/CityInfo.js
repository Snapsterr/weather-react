import React from "react"
import { useSelector } from "react-redux"
import { time } from "../../helpers/time"

import "./CityInfo.scss"

const CityInfo = () => {
  const { cityName, cityCountry } = useSelector(
    (state) => state.currentWeatherSliceReducer
  )
  const isTimeChecked = useSelector(
    (state) => state.switchParamsReducer.isTimeChecked
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
        {isTimeChecked
          ? time.getUSTime(dt, timezone_offset, true)
          : time.getEUTime(dt, timezone_offset, true)}
      </div>
    </div>
  )
}

export default React.memo(CityInfo)
