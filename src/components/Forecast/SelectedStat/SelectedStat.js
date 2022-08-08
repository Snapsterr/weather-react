import React from "react"
import { useSelector } from "react-redux"
import { time } from "../../../helpers/time"
import { useHorizontalScroll } from "../../../hooks/useHorizontalScroll"

import "./SelectedStat.scss"

const SelectedStat = ({ tempUnit, selectedValue, weather, toFarenheit }) => {
  const isTimeChecked = useSelector(
    (state) => state.switchParamsReducer.isTimeChecked
  )

  const dayHourly = weather.hourly.slice(0, 24)

  const { timezone_offset } = weather

  const scrollRef = useHorizontalScroll()
  return (
    <div className="forecast__selected-stat" ref={scrollRef}>
      {dayHourly.map((item) => {
        return (
          <div className="item" key={item.dt}>
            <div className="item__title">
              {isTimeChecked
                ? time.getUSTime(item.dt, timezone_offset, false)
                : time.getEUTime(item.dt, timezone_offset, true)}
            </div>
            <img
              className="item__icon"
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
            {selectedValue === "Temperature" ? (
              <div className="item__bottom">
                {tempUnit === "Celsius"
                  ? item.temp.toFixed(1)
                  : toFarenheit(item.temp, false)}
                °
              </div>
            ) : (
              <div className="item__bottom">{item.humidity}%</div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(SelectedStat)
