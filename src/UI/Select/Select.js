import React, { useState } from "react"

import "./Select.scss"

const Select = ({ options, value, onChangeValue }) => {
  const [isActive, setIsActive] = useState(false)

  const handleChange = (e) => {
    setIsActive(!isActive)
  }

  return (
    <div className="select-box">
      <div className="select-box__field" onClick={handleChange}>
        <span className="select-box__field-name">{value}</span>
        <span className="select-arrow">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
          >
            <g>
              <path d="M500,775.4L10,287.2l64.4-62.6L500,650.2l425.6-425.6l64.4,62.6L500,775.4z" />
            </g>
          </svg>
        </span>
      </div>
      {isActive && (
        <div className="select-box__options">
          {options.map(({ name, value }) => (
            <div
              className="select-box__option"
              onClick={(e) => {
                onChangeValue(name)
                setIsActive(false)
              }}
              key={value}
              value={value}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default React.memo(Select)
