import React from 'react';
import { deletePicture } from "./Services/PictureService";

import './Miniature.css';

export default function Miniature(props) {

    const handleClick = (e) => {
        e.preventDefault();
        props.handleClick(props.id);
    }
    

    return (
        <div className='miniature__container'>
            <img src={props.image} width={props.width} alt='' />
            <a className='miniature__btn--delete' onClick={handleClick}>
                &times;
            </a>
            <div className='miniature__bloc-infos'>
                <ul>
                    <li>Titre: {props.imgTitle}</li>
                    <li>Description: {props.imgDescription}</li>
                </ul>
            </div>
        </div>
    );
}
