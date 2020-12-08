import React from 'react';
import usePicturesList from './usePicturesList';
import Miniature from './Miniature';
import { deletePicture } from '../../Services/PictureService';
import './ManagePictures.css';

export default function ManagePictures() {
    const picturesList = usePicturesList();

    console.log(picturesList);

    const handleDeletePictureClick = (id) => {
        deletePicture(id)
            .then()
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>Gestion des Photos:</h2>

            <div className='ManagePictures__images-container'>
                <details>
                    <summary>Mondes Macros</summary>
                    {picturesList &&
                        picturesList
                            .filter((pic) => pic.category === 'macros')
                            .map((img) => {
                                return (
                                    <Miniature
                                        image={img.miniaturePath}
                                        width='500'
                                        key={img._id}
                                        id={img._id}
                                        imgTitle={img.name}
                                        imgDescription={img.description}
                                        handleClick={handleDeletePictureClick}
                                    />
                                );
                            })}
                </details>
              <details>
                    <summary>Studio Portraits</summary>
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
                                        handleClick={handleDeletePictureClick}
                                    />
                                );
                            })}
              </details>
                <details>
                    <summary>Au Café des Graphistes</summary>
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
                                        handleClick={handleDeletePictureClick}
                                    />
                                );
                            })}
                </details>
            </div>
        </div>
    );
}
