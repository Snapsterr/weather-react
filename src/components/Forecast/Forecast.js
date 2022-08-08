import React, { useState } from "react"
import { useSelector } from "react-redux"
import Select from "../../UI/Select/Select"
import WeeklyForecast from "./WeeklyForecast/WeeklyForecast"

import "./Forecast.scss"
import SelectedStat from "./SelectedStat/SelectedStat"

const Forecast = ({ tempUnit, toFarenheit }) => {
  const options = [
    { name: "Temperature", value: 1 },
    { name: "Humidity", value: 2 },
  ]

  const [selectedValue, setSelectedValue] = useState(options[0].name)

  const { weather } = useSelector((state) => state.weeklyWeatherSliceReducer)

  return (
    <div className="forecast">
      <div className="forecast__title">Forecast</div>
      <div className="forecast__current-stat">
        <Select
          options={options}
          value={selectedValue}
          onChangeValue={setSelectedValue}
        />
        <SelectedStat
          selectedValue={selectedValue}
          weather={weather}
          tempUnit={tempUnit}
          toFarenheit={toFarenheit}
        />
      </div>
      <WeeklyForecast
        weather={weather}
        tempUnit={tempUnit}
        toFarenheit={toFarenheit}
      />
    </div>
  )
}

export default Forecast
