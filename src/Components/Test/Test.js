import React, { useState, useRef } from 'react';
import http from '../../http-common';
import './Test.css';

export default function Test() {
    const inputFileRef = useRef();

    const [prevImage, setPrevImage] = useState(null);
    const [getReq, setGetReq] = useState(0);

    const [file, setFile] = useState({
        name: '',
        description: '',
        file: '',
        categorie: '',
    });

    const changeGetId = (e) => {
        setGetReq(e.target.value);
    };

    const getOne = () => {
        console.log('Get One func executed');
        http.get('/files/' + getReq)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getAll = () => {
        console.log('Get All func executed');
        http.get('/files')
            .then((response) => {
                console.log(response);
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
        console.log(inputFileRef.current.files[0]);
    };

    const postChangeCategory = (e) => {
        setFile({
            ...file,
            categorie: e.target.value,
        });
    };

    const postPic = () => {
        let formData = new FormData();
        let picture = {
            name: file.name,
            description: file.description,
            categorie: file.categorie,
        };

        formData.append('picture', JSON.stringify(picture));
        formData.append('image', file.file);

        http.post('/files', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='test__container'>
            <h1 className='test__title'>Backend Communication test page</h1>
            <h4>Les résultats des tests sont visibles dans la console (F12)</h4>

            <div className='test__bloc'>
                <h3>Test GET:</h3>
                <input type='text' placeholder='picture ID to request' onChange={changeGetId} />
                <button onClick={getOne}>GET ONE</button>
                <button onClick={getAll}>GET ALL</button>
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

                <input type='file' onChange={postChangeFile} ref={inputFileRef} />
                <img src={prevImage} alt='' width='300' />
                <button onClick={postPic}>POST Pic</button>
            </div>
        </div>
    );
}
