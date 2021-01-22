import React from 'react';
import Tilt from 'react-parallax-tilt';

import './Accueil.css';

import pictureSkeleton from '../../Assets/landing-page-picture-skeleton.jpg';

export default function PerspectiveMiniature(props) {


    return (
        <Tilt
            className='section__tilt'
            tiltReverse={true}
            glareEnable={false}
            // glareMaxOpacity={0.1}
            // glarePosition={'bottom'}
            // glareReverse={false}
            perspective={1000}
            transitionSpeed={5000}
            scale={1}
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            trackOnWindow={true}>
            {props.image ? (
                <div className={`tilted--${props.altText}`} onClick={props.handleClick}>
                    <div className={`menuImage__title--${props.altText}`}>
                        {props.title}
                        <props.icon className={`menuImage__icon`} />
                    </div>
                    <img
                        onLoad={props.imageIsLoaded}
                        className={`menuImage`}
                        src={props.image}
                        alt={props.altText}
                        width='600px'
                    />
                </div>
            ) : (
                <img src={pictureSkeleton} alt='skeleton, loading ...' className='skeleton' />
            )}
        </Tilt>
    );
}
