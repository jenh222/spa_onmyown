import React, {useState, useEffect} from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(false);

    //Click Event
    const handleHamburgerClick = () => {
        if (showMenu === false) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }

    //Window Resize Event
    const handleWindowResize = () => {
        if (window.innerWidth > 599) {
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }

    //Only when components first mount
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();
    },[]);

    return (
        <nav className='Nav'>
           
            <div className="hamburger" onClick={handleHamburgerClick} >
                    <FontAwesomeIcon icon={faBars}/>
            </div>
            {
                showMenu && 
                <div className="links">
                    <NavLink to ='/' exact>Who We Are</NavLink>
                    <NavLink to ='/events'>Events</NavLink>
                    <NavLink to ='/contact'>Contact</NavLink>
                    <NavLink to ='/login'>Login</NavLink>
                </div>
            }
        </nav>
    )
};

export default Nav;