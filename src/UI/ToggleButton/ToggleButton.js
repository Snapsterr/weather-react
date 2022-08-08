import React from "react"

import "./ToggleButton.scss"

const ToggleButton = ({
  toggleName,
  toggleId,
  param1,
  param2,
  toggleFormat,
  checked,
}) => {
  return (
    <div className="toggle">
      <div className="toggle__name">{toggleName}</div>
      <div className="toggle__button">
        <div className="toggle__param">{param1}</div>
        <label htmlFor={toggleId} className="toggle__slide">
          <input
            id={toggleId}
            type="checkbox"
            onChange={toggleFormat}
            checked={checked}
          />
          <span className="slider"></span>
        </label>
        <div className="toggle__param">{param2}</div>
      </div>
    </div>
  )
}

export default React.memo(ToggleButton)
