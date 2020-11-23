import React from 'react';
import Tilt from 'react-parallax-tilt';
import './PerspectiveImage.css'

export default function PerspectiveMiniature(props) {
    return (
        <Tilt
            tiltReverse={true}
            glareEnable={false}
            glareMaxOpacity={0.3}
            glarePosition={'all'}
            glareReverse={false}
            perspective={1000}
            transitionSpeed={10000}
        >
            <img className="section__image" src={props.image} alt="" width="600px" />
        </Tilt>
    );
}
