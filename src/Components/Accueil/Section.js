import React from 'react';
import './Accueil.css';

export default function Section(props) {
    return (
        <div className={`section__container`} onClick={props.handleClick}>
            <div className="section__icon">
                <props.icon/>
            </div>
            <div className={`section__${props.category}-container-text`}>
                <h2 className={`section__${props.category}-title section-title`}>{props.title}</h2>
                <p className={`section__${props.category}-text section-text`}>{props.description}</p>
            </div>

        </div>
    );
}
