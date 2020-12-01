import React from 'react';
import http from '../http-common';

import './Miniature.css';

export default function Miniature(props) {
    const deletePicture = () => {
        http.delete(`/files/${props.id}`)
            .then(console.log(`Supression de l'image id: ${props.id}`))
            .catch((err) => {
                console.log(err);
            });
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
