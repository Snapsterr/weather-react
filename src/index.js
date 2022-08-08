import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import { store } from "./store/store"

import App from "./App"
import { useSelector } from "react-redux"

// const isThemeDark = useSelector(
//   (state) => state.switchParamsReducer.isThemeDark
// )
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
)
