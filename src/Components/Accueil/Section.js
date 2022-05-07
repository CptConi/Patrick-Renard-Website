import './Accueil.css';

import React from 'react';
import { Link } from 'react-router-dom';

export default function Section(props) {
    return (
        <div className={`section__container`}>
            <div className='section__icon'>
                <props.icon />
            </div>
            <div className={`section__container-text`}>
                <h2 className={`section__${props.category}-title section-title`}>{props.title}</h2>
                <p className={`section__${props.category}-text section-text`}>
                    {props.description}
                </p>
                <Link to={props.urlLink} className='section__btn--accessGallery'>
                    Accéder à la Galerie
                </Link>
            </div>
        </div>
    );
}
