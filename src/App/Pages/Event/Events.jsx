
import React, { useState } from 'react';

import Lightbox from '../../Lightbox/Lightbox.jsx';


const Event = (props) => {

    const [showLightBox, setShowLightBox] = useState('false');

    const turnLightOn = () => {
        console.log('Turning On');
        setShowLightBox('true');
    }
    const turnLightOff = () => {
        console.log('Turning Off');
        setShowLightBox('false');
    }
    

    return (
        <div className = 'EventCategory'>
            <img 
            onClick={ turnLightOn }
            src= {props.eventCategory.image} 
            alt={props.eventCategory.title} 
            />
            <h3>{ props.eventCategory.title }: Category:{ props.eventCategory.category }</h3>
            <Lightbox 
            show={showLightBox} 
            turnLightOff={turnLightOff}
            imageURL={props.eventCategory.image}
            imageAlt={props.eventCategory.title}
             />
        </div>
    );
}

export default Event;