import React from 'react';
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
                glareMaxOpacity={0.3}
                glarePosition={'bottom'}
                glareReverse={false}
                perspective={1000}
                transitionSpeed={5000}
                scale={1.02}>
                {props.image ? (
                    <img className='section__image' src={props.image} alt='' width='600px' />
                ) : (
                    <img
                        src={pictureSkeleton}
                        alt='skeleton, loading ...'
                        className='section__image skeleton'
                    />
                )}
            </Tilt>
        </Link>
    );
}
