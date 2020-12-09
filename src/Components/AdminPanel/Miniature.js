import React from 'react';
import { setLandingPagePicture } from '../../Services/PictureService';

import './Miniature.css';

export default function Miniature(props) {
    const handleDeleteClick = (e) => {
        e.preventDefault();
        props.handleClick(props.id);
    };

    const handleSetLandingPagePicture = () => {
        setLandingPagePicture(props.id, props.category);
    }

    return (
        <div className='miniature__container'>
            <img src={props.image} width={props.width} alt='' />
            <button className='miniature__btn--delete' onClick={handleDeleteClick}>
                &times;
            </button>
            <input
                type='radio'
                id={`landingPageRadio-${props.category}-${props.id}`}
                name={`landingPage-${props.category}`}
                value={props.id}
                className='radio__landingpagecheck'
                defaultChecked={props.isOnLandingPage}
                onChange={handleSetLandingPagePicture}
            />
            <div className='miniature__bloc-infos'>
                <ul>
                    <li>Titre: {props.imgTitle}</li>
                    <li>Description: {props.imgDescription}</li>
                </ul>
            </div>
        </div>
    );
}
