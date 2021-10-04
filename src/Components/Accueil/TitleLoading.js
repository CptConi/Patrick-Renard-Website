import './Accueil.css';

import React from 'react';

export default function SlideGallery(props) {
    return (
        <div className='title-loading__wrapper'>
            <h1 className='loading-title' id='titleRef'>
                Patrick d'Andernos...&nbsp;&nbsp;
                <div
                    className='overlay'
                    style={{
                        width: `${props.loadingValue}%`,
                        opacity: `${props.loadingValue}%`,
                    }}>
                    Patrick d'Andernos...&nbsp;&nbsp;
                </div>
            </h1>
        </div>
    );
}
