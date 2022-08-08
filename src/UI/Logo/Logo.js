import React from "react"
import logo from "../../assets/img/logo.png"
import "./Logo.scss"

const Logo = () => {
  return (
    <div>
      <a href="/" className="logo">
        <div className="logo__img">
          <img src={logo} alt={logo} />
        </div>
        <div className="logo__title">Open sky</div>
      </a>
    </div>
  )
}

export default React.memo(Logo)
