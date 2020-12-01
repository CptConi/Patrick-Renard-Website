import React, { useState, useRef } from 'react';
import Miniature from '../Miniature';
import http from '../../http-common';
import imageCompression from 'browser-image-compression';
import './Test.css';

export default function Test() {
    const inputFileRef = useRef();

    const [prevImage, setPrevImage] = useState(null);
    const [getAllResponse, setGetAllResponse] = useState();

    const [file, setFile] = useState({
        name: '',
        description: '',
        file: '',
        categorie: 'macros',
    });

    const uploadFileWithDBInfos = (formData) => {
        http.post('/files', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const uploadFileWithoutDBInfos = (formData) => {
        http.post('/files/compressed', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
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
        http.get('/files')
            .then((response) => {
                setGetAllResponse(response.data);
                console.log(getAllResponse);
            })
            .catch((err) => {
                console.log(err);
            });
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
        // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

        const options = {
            maxSizeMB: 3,
            maxWidthOrHeight: maxWidthOrHeight,
            useWebWorker: true,
        };
        try {
            const compressedFile = await imageCompression(imageFile, options);
            // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
            // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
            let formData = new FormData();
            formData = createFormData(formData, compressedFile, compressionName);
            uploadFileWithoutDBInfos(formData);
        } catch (error) {
            console.log(error);
        }
    }

    const postPic = () => {
        compressAndUpload(1440, 'half');
        compressAndUpload(500, 'miniature');

        let formData = new FormData();
        formData = createFormData(formData, file.file, 'full');
        uploadFileWithDBInfos(formData);
    };

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
                            return <Miniature image={data.miniaturePath} width='500' key={data._id} id={data._id} />;
                        })}
                </div>
            </div>
            <div className='test__bloc col'>
                <h3>Test POST:</h3>
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

                <input type='file' onChange={postChangeFile} ref={inputFileRef} accept='image/*' />
                <img src={prevImage} alt='' width='300' />
                <button onClick={postPic}>POST Pic</button>
            </div>
        </div>
    );
}
