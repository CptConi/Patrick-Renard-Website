import React, { useEffect, useState } from 'react';
import { getAllPictures } from '../../Services/PictureService';
import './Accueil.css';

export default function SlideGallery() {
    const [picturesList, setPicturesList] = useState();
    const [isVisible, setIsVisible] = useState('hidden');
    const [loadingValue, setLoadingValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllPictures();
            setPicturesList(response.data);
        };
        fetchData();
    }, []);

    const computeLoadingValue = (current, max) => {
        return Math.floor((current / max) * 100);
    };

    return (
        <div>
            <h2>Chargement: {loadingValue} %</h2>
            <div className={`slideGallery ${isVisible}`}>
                {picturesList &&
                    picturesList.map((pic, index) => {
                        return (
                            <img className='slideGallery__img'
                                src={pic.miniaturePath}
                                alt={pic.description}
                                key={pic._id}
                                onLoad={() => {
                                    if (index === picturesList.length - 1) {
                                        setIsVisible('animated-scroll');
                                    }
                                    // eslint-disable-next-line
                                    {
                                        setLoadingValue(
                                            computeLoadingValue(index, picturesList.length - 1)
                                        );
                                    }
                                }}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
