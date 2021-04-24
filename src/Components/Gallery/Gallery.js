import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Slider from './Slider';
import CurrentPicture from './CurrentPicture';
import { getGalleryFromCategory } from '../../Services/PictureService';
import sectionText from '../../Services/content';

import cross from '../../Assets/cross.svg';
import './Gallery.css';

export default function Gallery() {
    const CATEGORY = {
        '/mondes-macros': 'macros',
        '/studio-portrait': 'portraits',
        '/au-cafe-des-graphistes': 'graphistes',
        macros: 'Monde Macros',
        portraits: 'Studio Portraits',
        graphistes: 'Au Café des Graphistes',
    };

    const currentCategory = CATEGORY[window.location.pathname];
    const galleryTitle = CATEGORY[currentCategory];

    const [picturesList, setPicturesList] = useState();
    const [currentIndex, setCurrentIndex] = useState();
    const [currentPicture, setCurrentPicture] = useState();

    const changePicture = (pic, index) => {
        setCurrentPicture(pic);
        setCurrentIndex(index);
    };

    const nextPicture = () => {
        let index = currentIndex;
        if (index < picturesList.length - 1) {
            index++;
        } else {
            index = 0;
        }
        let newPicture = picturesList[index];
        changePicture(newPicture, index);
    };

    const previousPicture = () => {
        let index = currentIndex;
        if (index === 0) {
            index = picturesList.length - 1;
        } else {
            index--;
        }
        let newPicture = picturesList[index];
        changePicture(newPicture, index);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await getGalleryFromCategory(currentCategory);
            setPicturesList(response.data);
            changePicture(response.data[0]);
            setCurrentIndex(0);
        };
        fetchData();
    }, [currentCategory]);

    const iconIsActive = (category) => {
        return (category === currentCategory ? ('nav__sectionIcon--active') : ('nav__sectionIcon--inactive'))
    }
    

    return (
        <div className='gallery__container'>
            <div className="nav__sectionIcon--wrapper">
                {sectionText.map((section) => {
                    return (
                        <Link to={section.urlLink} >
                        <section.icon
                        key={section.id}
                        className={`nav__sectionIcon ${iconIsActive(section.category)}`}
                        />
                        </Link>
                    );
                })}
            </div>
            <Link to="/"><img className="nav__close-btn" src={cross} alt="Cross icon"/></Link>
            {currentPicture && (
                <div>
                    <h1 className={`gallery__title gallery__title--${currentCategory}`}>
                        {galleryTitle}
                    </h1>

                    <CurrentPicture
                        path={currentPicture.halfSizePath}
                        pathHD={currentPicture.fullSizePath}
                        description={currentPicture.description}
                        handlePrevClick={previousPicture}
                        handleNextClick={nextPicture}
                    />
                </div>
            )}
            

            <Slider picturesList={picturesList} handlePictureClick={changePicture} />
        </div>
    );
}
