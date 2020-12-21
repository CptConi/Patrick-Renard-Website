import React from 'react';
import leftArrow from '../../Assets/carousel-arrow-left.png'
import rightArrow from '../../Assets/carousel-arrow-right.png'
import { usePalette } from 'color-thief-react';

export default function CurrentPicture(props) {
    const { data, loading } = usePalette(props.path, 2, 'hex', {
        crossOrigin: 'anonymous',
        quality: 10,
    });

    return (
        <div>
            {loading ? (
                <div className='gradient-wrapper' style={{ background: '#fff' }}>
                    <div id='currentPicture'></div>
                </div>
            ) : (
                <div className='gradient-wrapper' style={{ background: data[0] }}>
                    <img src={props.path} alt={props.description} id='currentPicture' />
                    <button
                        onClick={props.handlePrevClick}
                        className='gallery__btn gallery__btn--prev'>
                        <img src={leftArrow} alt='Fleche pointant vers la gauche' />
                    </button>
                    <button
                        onClick={props.handleNextClick}
                        className='gallery__btn gallery__btn--next'>
                        <img src={rightArrow} alt='Fleche pointant vers la droite' />
                    </button>
                </div>
            )}
        </div>
    );
}
