import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import './Accueil.css';

import pictureSkeleton from '../../Assets/landing-page-picture-skeleton.jpg';

export default function PerspectiveMiniature(props) {
    return (
        <Link to={props.urlLink}>
            <Tilt
                className='section__tilt'
                tiltReverse={true}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glarePosition={'bottom'}
                glareReverse={false}
                perspective={1000}
                transitionSpeed={5000}
                scale={1}
                tiltMaxAngleX={7}
                tiltMaxAngleY={7}
                trackOnWindow={true}>
                {props.image ? (
                    <div className={`tilted--${props.altText}`}>
                        <div className={`menuImage__title--${props.altText}`}>
                            {/* <img
                                src={props.icon}
                                alt={`${props.category} icon`}
                                className={`menuImage__icon menuImage__icon--${props.category}`}
                            /> */}
                            {props.title}
                            <props.icon
                                className={`menuImage__icon`}
                            />
                        </div>
                        <img
                            className={`menuImage`}
                            src={props.image}
                            alt={props.altText}
                            width='600px'
                            onLoad={props.imageIsLoaded}
                        />
                    </div>
                ) : (
                    <img src={pictureSkeleton} alt='skeleton, loading ...' className='skeleton' />
                )}
            </Tilt>
        </Link>
    );
}
