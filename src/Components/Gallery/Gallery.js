import React, { useEffect, useState } from 'react';
import {getGalleryFromCategory} from '../../Services/PictureService';

export default function Gallery() {
    const CATEGORY = {
        '/mondes-macros': 'macros',
        '/studio-portrait': 'portraits',
        '/au-cafe-des-graphistes': 'graphistes',
    };

    const [picturesList, setPicturesList] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getGalleryFromCategory(CATEGORY[window.location.pathname]);
            setPicturesList(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className="gallery__container">
            {picturesList && picturesList.map(pic => {
                return (
                    <img src={pic.miniaturePath} alt=""/>
                )
            })}
        </div>
    );
}
