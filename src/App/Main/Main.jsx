import React from 'react';
import './Main.scss';
import Tabbed from '../Tabbed/Tabbed.jsx';

const Main = () => {
    return (
        <main className='Main'>
            
            <Tabbed />
            <div className="columns">
                 <div className="col col1">image</div>
                 <div className="col col2">copy</div>
            </div>
        </main>
    )
};

export default Main;