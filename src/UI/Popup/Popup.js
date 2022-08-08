import React from "react"

import "./Popup.scss"

const Popup = ({ msg, handlePopup }) => {
  return (
    <div className="popup__bg" onClick={handlePopup}>
      <div className="popup__centered" onClick={(e) => e.stopPropagation()}>
        <div className="popup__close" onClick={handlePopup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path d="M10.05 23.95a1 1 0 0 0 1.414 0L17 18.414l5.536 5.536a1 1 0 0 0 1.414-1.414L18.414 17l5.536-5.536a1 1 0 0 0-1.414-1.414L17 15.586l-5.536-5.536a1 1 0 0 0-1.414 1.414L15.586 17l-5.536 5.536a1 1 0 0 0 0 1.414z" />
          </svg>
        </div>
        <div className="popup__warning">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="alert-circle">
                <rect width="24" height="24" opacity="0" />
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                <circle cx="12" cy="16" r="1" />
                <path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z" />
              </g>
            </g>
          </svg>
        </div>
        <div className="popup__msg">
          <p>{msg}</p>
        </div>
      </div>
    </div>
  )
}

export default Popup
