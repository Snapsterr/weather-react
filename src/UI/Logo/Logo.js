import React from 'react'
import logo from '../../assets/img/logo.png'
import './Logo.scss'

const Logo = () => {
    console.log('render')
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} alt={logo} />
            </div>
            <div className="header__title">
                Open sky
            </div>
        </div>
    )
}

export default React.memo(Logo)