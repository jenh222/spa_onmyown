import React, { useState, useEffect } from 'react';
import './Event.scss';
//import { eventCategories } from './event.js';
import API from '../../common/API.js';

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
            <div key={idx} className = {'EventCategory'}>
                <img src= {eventCategory.image} alt={eventCategory.name} />
                <h3>{ eventCategory.category }</h3>
            </div>
        );
    });
}

const Event = () => {
    return (
        <div className ='Event'>
            <h2>Events go here.</h2>
            <div className="container">
                <EventCategories />
            </div>
        </div>
    )
}

export default Event;