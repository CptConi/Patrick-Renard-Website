import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getGalleryFromCategory, getOnePicture } from '../../Services/PictureService';

export default function Gallery() {
    let history = useHistory();

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

    useEffect(() => {
        const fetchData = async () => {
            const response = await getGalleryFromCategory(currentCategory);
            setPicturesList(response.data);
        };
        fetchData();
    }, []);


    return (
        <div className='gallery__container'>
            <h1>{galleryTitle}</h1>
            {picturesList &&
                picturesList.map((pic) => {
                    return (
                        <img
                            src={pic.miniaturePath}
                            alt={pic.description}
                            onClick={() => {
                                history.push({
                                    pathname: '/slider',
                                    search: pic._id,
                                });
                            }}
                        />
                    );
                })}
        </div>
    );
}
