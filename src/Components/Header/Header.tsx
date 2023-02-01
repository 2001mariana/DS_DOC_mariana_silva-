import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <header className='Header'>
            <div className='Header__container'>
                <NavLink
                    className='Header__name'
                    to=""
                >
                    Design System - Mariana Silva
                </NavLink>
                <div className='Header__links'>                
                <li className="Menu__item">
                    <NavLink
                        className={(navData) => navData.isActive ? "Menu__link--active" : "Menu__link" }
                        to="Buttons"
                    >
                         Buttons
                    </NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink
                        className={(navData) => navData.isActive ? "Menu__link--active" : "Menu__link" }
                        to="DSalurabook"
                    >
                         AB Components
                    </NavLink>
                </li>
                </div>
            </div>
        </header>
    )
}

export default Header