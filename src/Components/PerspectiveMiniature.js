import React from 'react';
import Tilt from 'react-parallax-tilt';
import './PerspectiveImage.css';

export default function PerspectiveMiniature(props) {
    return (
        <Tilt
            className="section__image"
            tiltReverse={true}
            glareEnable={false}
            glareMaxOpacity={0.3}
            glarePosition={'right'}
            glareReverse={false}
            perspective={1000}
            transitionSpeed={5000}
            scale={1.02}
        >
            <img src={props.image} alt="" width="600px" />
        </Tilt>
    );
}
