import React from 'react';
import './Event.scss';
import { eventCategories } from './event.js';

const EventCategories = () => {
    return eventCategories.map((eventCategory, idx) => {
        return (
            <div key={idx} className = {'EventCategory'}>
                <img src= {eventCategory.img} alt={eventCategory.name} />
                <h3>{ eventCategory.name }</h3>
            </div>
        );
    });
}

const Event = () => {
    return (
        <div className ='Event'>
            <h2>Events go here.</h2>
            <EventCategories />
        </div>
    )
}

export default Event;