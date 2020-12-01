import React from 'react';
import './Miniature.css';

export default function Miniature(props) {
    const deletePicture = () => {
        console.log(`Supression de l'image id: ${props.id}`);
    };

    return (
        <div className='miniature__container'>
            <img src={props.image} width={props.width} alt='' />
            <button className='miniature__btn--delete' onClick={deletePicture}>
                &times;
            </button>
            <div className='miniature__bloc-btn'></div>
        </div>
    );
}
