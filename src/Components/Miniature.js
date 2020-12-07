import React from 'react';

import './Miniature.css';

export default function Miniature(props) {

    const handleClick = (e) => {
        e.preventDefault();
        props.handleClick(props.id);
    }
    

    return (
        <div className='miniature__container'>
            <img src={props.image} width={props.width} alt='' />
            <button className='miniature__btn--delete' onClick={handleClick}>
                &times;
            </button>
            <div className='miniature__bloc-infos'>
                <ul>
                    <li>Titre: {props.imgTitle}</li>
                    <li>Description: {props.imgDescription}</li>
                </ul>
            </div>
        </div>
    );
}
