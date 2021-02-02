import React from 'react';
import './Accueil.css';

export default function SlideGallery(props) {
    

    return (
        <div className='title-loading__wrapper'>
            <h1 className='loading-title' id='titleRef'>
                Patrick d'Andernos
                <div className='overlay' style={{ width: `${props.loadingValue}%` }}>
                    Patrick d'Andernos
                </div>
            </h1>
        </div>
    );
}
