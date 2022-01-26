import React from "react"
import { useSelector } from "react-redux"
import CityInfo from "../../components/CityInfo/CityInfo"
import CurrentDetails from "../../components/CurrentDetails/CurrentDetails"
import CurrentWeatherInfo from "../../components/CurrentWeatherInfo/CurrentWeatherInfo"
import ForecastInfo from "../../components/ForecastInfo/ForecastInfo"
import Loader from "../../UI/Loader/Loader"

import "./WeatherBlock.scss"

const WeatherBlock = () => {
  const { weather, isLoading } = useSelector(
    (state) => state.weeklyWeatherSliceReducer
  )

  const getLocalTime = (dt, timezone) => {
    let localTime = new Date((dt + timezone) * 1000)
    let localHours = localTime.getUTCHours()
    let localMinutes = localTime.getUTCMinutes()
    return `${localHours < 10 ? "0" : ""}${localHours}:${
      localMinutes < 10 ? "0" : ""
    }${localMinutes}`
  }

  const getDay = (dt, timezone) => {
    let weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    let localTime = new Date((dt + timezone) * 1000)
    let currentDay = localTime.getUTCDay()
    return weekDay[currentDay]
  }

  return (
    <div className="weather-info">
      {Object.keys(weather).length !== 0 && !isLoading ? (
        <div className="weather-info__wrapper">
          <div className="weather-info__top">
            <CurrentWeatherInfo />
            <CityInfo getLocalTime={getLocalTime} />
          </div>
          <div className="weather-info__bottom">
            <ForecastInfo getLocalTime={getLocalTime} getDay={getDay} />
            <CurrentDetails />
          </div>
        </div>
      ) : null}
      {isLoading ? <Loader /> : null}
    </div>
  )
}

export default WeatherBlock
