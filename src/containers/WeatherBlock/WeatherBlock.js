import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CityInfo from "../../components/CityInfo/CityInfo"
import Details from "../../components/Details/Details"
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather"
import Forecast from "../../components/Forecast/Forecast"
import { controlStorage } from "../../helpers/controlStorage"
import Loader from "../../UI/Loader/Loader"

import "./WeatherBlock.scss"
import Popup from "../../UI/Popup/Popup"
import { resetStatus } from "../../store/slices/currentWeatherSlice"

const WeatherBlock = () => {
  const { weather, isLoading } = useSelector(
    (state) => state.weeklyWeatherSliceReducer
  )
  const { status, message } = useSelector(
    (state) => state.currentWeatherSliceReducer.response
  )
  const { tempUnit } = useSelector((state) => state.switchTempUnitReducer)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    Number(status) !== 0 && Number(status) !== 200
      ? setIsOpen(true)
      : setIsOpen(false)
  }, [status])

  const handlePopup = (e) => {
    setIsOpen(false)
    dispatch(resetStatus())
  }

  useEffect(() => {
    controlStorage.setItem("temp", tempUnit)
  }, [tempUnit])

  const toFarenheit = (celsius, bool) => {
    let converted = (celsius * 9) / 5 + 32
    return converted >= 100 && bool
      ? converted.toFixed(0)
      : converted.toFixed(1)
  }

  return (
    <div className="weather-info">
      {Object.keys(weather).length !== 0 && !isLoading ? (
        <div className="weather-info__wrapper">
          <div className="weather-info__top">
            <CurrentWeather tempUnit={tempUnit} toFarenheit={toFarenheit} />
            <CityInfo />
          </div>
          <div className="weather-info__bottom">
            <Forecast tempUnit={tempUnit} toFarenheit={toFarenheit} />
            <Details tempUnit={tempUnit} toFarenheit={toFarenheit} />
          </div>
        </div>
      ) : null}
      {isLoading ? <Loader /> : null}
      {isOpen && <Popup msg={message} handlePopup={handlePopup} />}
    </div>
  )
}

export default WeatherBlock
