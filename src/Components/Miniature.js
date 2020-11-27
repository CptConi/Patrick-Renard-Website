import React from 'react'

export default function Miniature(props) {
    return (
        <div>
            <img src={props.image} width={ props.width }/>
        </div>
    )
}
