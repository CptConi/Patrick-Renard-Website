import React from 'react';
import './Accueil.css';

export default function SlideGallery(props) {
 

    return (
        <div className='title-loading__wrapper'>
            <div className='loading-title'>
                Patrick d'Andernos
                <div className='overlay' style={{ width: `${props.loadingValue}%` }}>
                    Patrick d'Andernos
                </div>
            </div>
            
        </div>
    );
}
