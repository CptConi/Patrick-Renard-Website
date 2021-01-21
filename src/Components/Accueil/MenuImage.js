import React from 'react';
import PerspectiveMiniature from './PerspectiveMiniature';

export default function MenuImage(props) {

    return (
        <div className={`menuImage__${props.category}`} id={`menuImageRef__${props.category}`}>
            <PerspectiveMiniature
                image={props.path}
                urlLink={props.urlLink}
                altText={props.category}
                imageIsLoaded={props.imageIsLoaded}
                title={props.title}
                icon={props.icon}
            />
        </div>
    );
}
