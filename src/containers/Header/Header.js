import React from "react"
import ControlGroup from "../../components/ControlGroup/ControlGroup"
import SearchBar from "../../components/SearchBar/SearchBar"
import Logo from "../../UI/Logo/Logo"

import "./Headers.scss"

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Logo />
        <ControlGroup />
      </div>
      <SearchBar />
    </div>
  )
}

export default Header
