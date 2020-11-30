import React, { useState, useRef } from 'react';
import Miniature from '../Miniature';
import http from '../../http-common';
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

    const sendPostRequest = (formData) => {
        http.post('/files', formData)
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

    const postPic = () => {
        let formData = new FormData();
        formData = createFormData(formData, file.file, '1440');

        sendPostRequest(formData);
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
                            return <Miniature image={data.imageUrl} width='500' />;
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
                            value='macros'
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
                            value='portraits'
                            onChange={postChangeCategory}
                        />
                        <label htmlFor='portraits'>Studio Portraits</label>
                    </div>

                    <div>
                        <input
                            type='radio'
                            id='graphistes'
                            name='categorie'
                            value='graphistes'
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
