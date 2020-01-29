import React from 'react';
import './Tabbed.scss';
import { useState } from 'react';

const tabItems = [
    {
        image: '/img/about.jpg',
        title: 'About',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    },
    {
        image: '/img/mission.jpg',
        title: 'Mission',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    },
    {
        image: '/img/vision.jpg',
        title: 'Vision',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    },
];

const Tabbed = () => {

    //State managed
    const [currentTab, setCurrentTab] = useState(tabItems[1]);

    return (
<div className={ 'Tabbed' }>
        <div className ="tabs">
            <div onClick={ () => {setCurrentTab(tabItems[0]) } }className="tab">About</div>
            <div onClick={ () => {setCurrentTab(tabItems[1]) } }className="tab">Mission</div>
            <div onClick={ () => {setCurrentTab(tabItems[2]) } }className="tab">Vision</div>
        </div>

        <div className="content">
            <img src={ currentTab.image }/>
            <h2>{ currentTab.title }</h2>
            <p>{ currentTab.text }</p>
        </div>
</div>

    )
}

export default Tabbed;