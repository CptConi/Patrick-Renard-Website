import React, { useState } from 'react';
import PerspectiveMiniature from './PerspectiveMiniature';
import Section from './Section';

import ReactCardFlip from 'react-card-flip';

export default function MenuImage(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div className={`menuImage__${props.category}`} id={`menuImageRef__${props.category}`}>
                <PerspectiveMiniature
                    image={props.path}
                    urlLink={props.urlLink}
                    altText={props.category}
                    imageIsLoaded={props.imageIsLoaded}
                    title={props.title}
                    icon={props.icon}
                    description={props.description}
                    handleClick={toggleFlip}
                />
            </div>
            <Section
                category={props.category}
                title={props.title}
                description={props.description}
                icon={props.icon}
                handleClick={toggleFlip}
            />
        </ReactCardFlip>
    );
}
