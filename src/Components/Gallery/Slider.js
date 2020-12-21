import React from 'react';
import SliderSlick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Slider(props) {
    const settings = {
        arrows:false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        swipe: true,
        swipeToSlide: true,
    };

    return (
        <div className='slider__container'>
            <SliderSlick {...settings}>
                {props.picturesList &&
                    props.picturesList.map((pic, index) => {
                        return (
                            <img
                                src={pic.miniaturePath}
                                alt={pic.description}
                                onClick={() => props.handlePictureClick(pic, index)}
                                key={pic._id}
                                className='slider__picture'
                                width='180'
                                height='100'
                            />
                        );
                    })}
            </SliderSlick>
        </div>
    );
}
