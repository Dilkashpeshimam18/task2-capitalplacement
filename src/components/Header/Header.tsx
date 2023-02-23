import React from 'react'
import './Header.css'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderTabs from './HeaderTabs/HeaderTabs'

const Header = () => {
    return (
        <div>
            <HeaderTop />
            <HeaderTabs />
        </div>
    )
}

export default Header