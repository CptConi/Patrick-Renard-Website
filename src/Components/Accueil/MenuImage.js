import React from 'react'

export default function MenuImage(props) {
    return (
        <div className={`menuImage__${props.category}`}>
            <img src={props.path} alt={props.altText} onLoad={props.imageIsLoaded} className='menuImage'/>
        </div>
    );
}
