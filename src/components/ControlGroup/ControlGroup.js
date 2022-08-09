import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeRootVariables } from "../../helpers/changeRootVariables"
import { controlStorage } from "../../helpers/controlStorage"
import { toggleTime, toggleTheme } from "../../store/slices/switchParams"
import ToggleButton from "../../UI/ToggleButton/ToggleButton"

import "./ControlGroup.scss"

const HeaderControls = () => {
  const dispatch = useDispatch()

  const { time, isTimeChecked, theme, isThemeChecked } = useSelector(
    (state) => state.switchParamsReducer
  )

  useEffect(() => {
    changeRootVariables(isThemeChecked)
    controlStorage.setItem("time", time)
    controlStorage.setItem("isTimeChecked", isTimeChecked)
    controlStorage.setItem("isThemeChecked", isThemeChecked)
    controlStorage.setItem("theme", theme)
  }, [time, isTimeChecked, theme, isThemeChecked])

  const toggleTimeFormat = (e) => {
    let isEU = time === "EU" ? "US" : "EU"
    dispatch(toggleTime(isEU, isTimeChecked))
  }

  const toggleThemeApp = (e) => {
    let isDark = theme === "dark" ? "light" : "dark"
    dispatch(toggleTheme(isDark, isThemeChecked))
  }

  return (
    <div className="controls">
      <ToggleButton
        toggleName={"Time format"}
        toggleId={"time"}
        param1={"EU"}
        param2={"US"}
        toggleFormat={toggleTimeFormat}
        checked={isTimeChecked}
      />
      <ToggleButton
        toggleName={"Theme"}
        toggleId={"theme"}
        param1={"Dark"}
        param2={"Light"}
        toggleFormat={toggleThemeApp}
        checked={isThemeChecked}
      />
    </div>
  )
}

export default HeaderControls
