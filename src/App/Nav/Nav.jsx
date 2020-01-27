import React, {useState} from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);
    
    const handleHamburgerClick = () => {
            console.log('This is the hamburger');

            let menuNav;

            if (showMenu === true) {
                menuNav = false;
            } else {
                menuNav = true;
            }

            updateShowMenu(menuNav);
    }
    return (
        <nav className='Nav'>

            <div className="hamburger" onClick={ handleHamburgerClick}>
            <FontAwesomeIcon icon={faBars}/>
            </div>

        {
            showMenu &&
            <div className="links">
                <a href="#">Who We Are</a>
                <a href="#">Events</a>
                <a href="#">Contact</a>
            </div>
        }
        </nav>
    )
};

export default Nav;