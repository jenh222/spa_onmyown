import React from 'react';
import Event from './Events.jsx';

const EventCategories = ({eventCategories, currCat}) => {
    return eventCategories.map((eventCategory, idx) => {

        if (currCat === 'All' || currCat === eventCategory.category) {
            return (
                <Event key={ idx } eventCategory={ eventCategory } />
            );
        }
        return false;
    });
}

export default EventCategories;