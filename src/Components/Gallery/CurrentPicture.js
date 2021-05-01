import { usePalette } from 'color-thief-react';
import React from 'react';

import arrow from '../../Assets/arrow.svg';

export default function CurrentPicture(props) {
    const { data, loading } = usePalette(props.path, 2, 'hex', {
        crossOrigin: 'anonymous',
        quality: 10,
    });

    return (
        <div>
            {loading ? (
                <div className='gradient-wrapper' style={{ background: '#555' }}>
                    <div id='currentPicture'></div>
                </div>
            ) : (
                <div className='gradient-wrapper' style={{ background: data[0] }}>
                    <div className='currentPicture__wrapper'>
                        <img src={props.path} alt={props.description} id='currentPicture' />
                        <a
                            className='HD-link'
                            href={props.pathHD}
                            target='_blank'
                            rel='noopener noreferrer'>
                            HD
                        </a>
                    </div>
                    <button
                        onClick={props.handlePrevClick}
                        className='gallery__btn gallery__btn--prev'>
                        <img src={arrow} alt='Fleche pointant vers la gauche' />
                    </button>
                    <button
                        onClick={props.handleNextClick}
                        className='gallery__btn gallery__btn--next'>
                        <img src={arrow} alt='Fleche pointant vers la droite' />
                    </button>
                </div>
            )}
        </div>
    );
}
