import React from "react"
import Header from "./containers/Header/Header"
import WeatherBlock from "./containers/WeatherBlock/WeatherBlock"

import "./styles/App.scss"

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <WeatherBlock />
      </div>
    </div>
  )
}

export default App
