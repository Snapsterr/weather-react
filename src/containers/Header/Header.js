import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import Logo from '../../UI/Logo/Logo'

import './Headers.scss'

const Header = () => {
    return (
        <div className="header-wrapper">
            <Logo />
            <SearchBar />
        </div>
    )
}

export default Header
