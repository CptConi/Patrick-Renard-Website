import React from 'react';
import PerspectiveMiniature from './PerspectiveMiniature';
import './Section.css';
import macroImg from '../Assets/nav-macro.jpg';

export default function Section(props) {
    return (
        <div className={props.classe}>
            <div className="section-container-left">
                <h2 className={`${props.classe}-title section-title`}>{props.title}</h2>
                <p className={`${props.classe}-text section-text`}>{props.description}</p>
            </div>
            <div className="section-container-right">
                <PerspectiveMiniature image={macroImg} />
            </div>
        </div>
    );
}
