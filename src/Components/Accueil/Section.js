import React from 'react';
import PerspectiveMiniature from './PerspectiveMiniature';
import './Accueil.css';

export default function Section(props) {
    return (
        <div className={`section__container ${props.classe}`}>
            <div className={`${props.classe}-container-text`}>
                <h2 className={`${props.classe}-title section-title`}>{props.title}</h2>
                <p className={`${props.classe}-text section-text`}>{props.description}</p>
            </div>
            <div className={`${props.classe}-container-image`}>
                <PerspectiveMiniature image={props.image} urlLink={props.urlLink} />
            </div>
        </div>
    );
}
