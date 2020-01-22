import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className='Nav'>

            <div className="hamburger">Hamburger Menu</div>

            <div className="links">
                <a href="#">Who We Are</a>
                <a href="#">Events</a>
                <a href="#">Contact</a>
            </div>

        </nav>
    )
};

export default Nav;