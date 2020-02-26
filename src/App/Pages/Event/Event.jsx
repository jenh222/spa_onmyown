import React, { useState, useEffect } from 'react';
import './Event.scss';
//import { eventCategories } from './event.js';
import API from '../../common/API.js';

import Event from './Events.jsx';

const EventCategories = () => {

    //1. Set up state to keep track of data from server
    const [eventCategories, setEventCategories] = useState([ ]);

    //Only do this on mount.
    useEffect(() => {
        //2. Retrieve the data from the server
        API.get('services/gallery').then((result) => {
            //3. Update eventCategories with data from server
            console.log('Staff Server Response', result);
            setEventCategories(result.data);
        });
    }, [ ]);

    return eventCategories.map((eventCategory, idx) => {
        return (
            <Event key={ idx } eventCategory={ eventCategory } />
        );
    });
}

const Events = () => {
    return (
        <div className ='Event'>
            <h2>Events Go Here.</h2>
            <div className="container">
                <EventCategories />
            </div>
        </div>
    )
}

export default Events;