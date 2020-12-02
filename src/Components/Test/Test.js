import React, { useState, useRef } from 'react';
import Miniature from '../Miniature';
import http from '../../http-common';
import imageCompression from 'browser-image-compression';
import { postPicture, getAllPictures, deletePicture } from '../Services/PictureService';
import './Test.css';

export default function Test() {
    // STATE
    const inputFileRef = useRef();

    const [prevImage, setPrevImage] = useState(null);
    const [getAllResponse, setGetAllResponse] = useState();

    const [file, setFile] = useState({
        name: '',
        description: '',
        file: '',
        categorie: 'macros',
    });

    // FUNCTIONS
    const uploadFile = (formData, asInfos) => {
        let uri = asInfos ? '' : '/compressed';
        postPicture(formData, uri)
            .then(getAll())
            .catch((err) => console.log(err));
    };

    const createFormData = (formData, image, compressionLevel) => {
        /*
         * compressionLevel peut prendre trois valeurs:
         *  - full
         *  - 1440
         *  - 500
         */

        let picture = {
            name: file.name,
            description: file.description,
            categorie: file.categorie,
            compressionLevel: compressionLevel,
        };

        formData.append('picture', JSON.stringify(picture));
        formData.append('image', image);

        return formData;
    };

    const getAll = () => {
        getAllPictures()
            .then((response) => setGetAllResponse(response.data))
            .catch((err) => console.log(err));
    };

    const postChangeName = (e) => {
        setFile({
            ...file,
            name: e.target.value,
        });
    };

    const postChangeDescription = (e) => {
        setFile({
            ...file,
            description: e.target.value,
        });
    };

    const postChangeFile = () => {
        setPrevImage(URL.createObjectURL(inputFileRef.current.files[0]));
        setFile({
            ...file,
            file: inputFileRef.current.files[0],
        });
    };

    const postChangeCategory = (e) => {
        setFile({
            ...file,
            categorie: e.target.value,
        });
    };

    async function compressAndUpload(maxWidthOrHeight, compressionName) {
        const imageFile = file.file;
        const options = {
            maxSizeMB: 3,
            maxWidthOrHeight: maxWidthOrHeight,
            useWebWorker: true,
        };
        try {
            const compressedFile = await imageCompression(imageFile, options);
            let formData = new FormData();
            formData = createFormData(formData, compressedFile, compressionName);
            uploadFile(formData, false);
        } catch (error) {
            console.log(error);
        }
    }

    const postPic = () => {
        compressAndUpload(1440, 'half');
        compressAndUpload(500, 'miniature');

        let formData = new FormData();
        formData = createFormData(formData, file.file, 'full');
        uploadFile(formData, true);
    };

    const handleDeletePictureClick = (id) => {
        deletePicture(id)
            .then(getAll())
            .catch((err) => console.log(err));
    };

    // RENDER
    return (
        <div className='test__container'>
            <h1 className='test__title'>Backend Communication test page</h1>
            <h4>Les résultats des tests sont visibles dans la console (F12)</h4>

            <div className='test__bloc'>
                <h3>Test GET:</h3>
                <button onClick={getAll}>GET ALL</button>
                <div className='test__images-container'>
                    {getAllResponse &&
                        getAllResponse.map((data) => {
                            return (
                                <Miniature
                                    image={data.miniaturePath}
                                    width='500'
                                    key={data._id}
                                    id={data._id}
                                    imgTitle={data.name}
                                    imgDescription={data.description}
                                    handleClick={handleDeletePictureClick}
                                />
                            );
                        })}
                </div>
            </div>
            <div className='test__bloc col'>
                <h3>Test POST:</h3>
                <input type='file' onChange={postChangeFile} ref={inputFileRef} accept='image/*' />

                <input type='text' placeholder='Nom picture' onChange={postChangeName} />
                <input type='text' placeholder='Description' onChange={postChangeDescription} />
                <div className='test__categorie'>
                    <p>Ajouter à la catégorie:</p>

                    <div>
                        <input
                            type='radio'
                            id='macros'
                            name='categorie'
                            value='Macros'
                            defaultChecked
                            onChange={postChangeCategory}
                        />
                        <label htmlFor='macros'>Monde Macros</label>
                    </div>

                    <div>
                        <input
                            type='radio'
                            id='portraits'
                            name='categorie'
                            value='Portraits'
                            onChange={postChangeCategory}
                        />
                        <label htmlFor='portraits'>Studio Portraits</label>
                    </div>

                    <div>
                        <input
                            type='radio'
                            id='graphistes'
                            name='categorie'
                            value='Graphistes'
                            onChange={postChangeCategory}
                        />
                        <label htmlFor='graphistes'>Au Café des Graphistes</label>
                    </div>
                </div>

                <img src={prevImage} alt='' width='300' />
                <button onClick={postPic}>POST Pic</button>
            </div>
        </div>
    );
}
