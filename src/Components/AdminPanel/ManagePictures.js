import React, { useState, useEffect } from 'react';
import { getAllPictures } from '../../Services/PictureService';
import Miniature from './Miniature';
import { deletePicture } from '../../Services/PictureService';
import './ManagePictures.css';

export default function ManagePictures() {
    const [picturesList, setPicturesList] = useState();

    console.log(picturesList);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAllPictures();
            setPicturesList(response.data);
        };
        fetchData();
    }, []);

    const handleDeletePictureClick = (id) => {
        deletePicture(id)
            .then(() => {
                // Permet de supprimer l'image du state et ainsi mettre à jour l'affichage
                setPicturesList(picturesList.filter((pic) => pic._id !== id));
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>Gestion des Photos:</h2>

            <div className='ManagePictures__images-container'>
                <details open>
                    <summary>Mondes Macros</summary>
                    <div className='miniature__wrapper'>
                        {picturesList &&
                            picturesList
                                .filter((pic) => pic.category === 'macros')
                                .map((img) => {
                                    return (
                                        <Miniature
                                            image={img.miniaturePath}
                                            width='500'
                                            height='300'
                                            key={img._id}
                                            id={img._id}
                                            imgTitle={img.name}
                                            imgDescription={img.description}
                                            category={img.category}
                                            isOnLandingPage={img.isOnLandingPage}
                                            handleClick={handleDeletePictureClick}
                                        />
                                    );
                                })}
                    </div>
                </details>
                <details open>
                    <summary>Studio Portraits</summary>
                    <div className='miniature__wrapper'>
                        {picturesList &&
                            picturesList
                                .filter((pic) => pic.category === 'portraits')
                                .map((img) => {
                                    return (
                                        <Miniature
                                            image={img.miniaturePath}
                                            width='500'
                                            key={img._id}
                                            id={img._id}
                                            imgTitle={img.name}
                                            imgDescription={img.description}
                                            category={img.category}
                                            isOnLandingPage={img.isOnLandingPage}
                                            handleClick={handleDeletePictureClick}
                                        />
                                    );
                                })}
                    </div>
                </details>
                <details open>
                    <summary>Au Café des Graphistes</summary>
                    <div className='miniature__wrapper'>
                        {picturesList &&
                            picturesList
                                .filter((pic) => pic.category === 'graphistes')
                                .map((img) => {
                                    return (
                                        <Miniature
                                            image={img.miniaturePath}
                                            width='500'
                                            key={img._id}
                                            id={img._id}
                                            imgTitle={img.name}
                                            imgDescription={img.description}
                                            category={img.category}
                                            isOnLandingPage={img.isOnLandingPage}
                                            handleClick={handleDeletePictureClick}
                                        />
                                    );
                                })}
                    </div>
                </details>
            </div>
        </div>
    );
}
