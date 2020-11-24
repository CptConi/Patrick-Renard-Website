import React from 'react';
import  {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import './PerspectiveImage.css';

export default function PerspectiveMiniature(props) {
    return (
        <Link to={props.urlLink}>
        <Tilt
            className="section__tilt"
            tiltReverse={true}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glarePosition={'bottom'}
            glareReverse={false}
            perspective={1000}
            transitionSpeed={5000}
            scale={1.02}
        >
            <img className="section__image" src={props.image} alt="" width="600px" />
        </Tilt>
            </Link>
    );
}
