import React from 'react';
import '../Pages.scss';
import Tabbed from './Tabbed/Tabbed.jsx';
import Staff from './Staff/Staff.jsx'

const Welcome = () => {
    return(
        <div className ={ 'Pages Welcome'}>
            Who We Are

            <Tabbed />

            <Staff />
            <div className="columns">
                 <div className="col col1">image</div>
                 <div className="col col2">copy</div>
            </div>

        </div>
    );
}

export default Welcome;