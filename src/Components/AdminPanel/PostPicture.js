import React, { useRef, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { postPicture } from '../../Services/PictureService';
import './PostPicture.css'

export default function PostPicture() {
    const inputFileRef = useRef();
    const [prevImage, setPrevImage] = useState(null);
    const [file, setFile] = useState({
        name: '',
        description: '',
        file: '',
        categorie: 'macros',
    });

    // FUNCTIONS
    const ChangeFile = () => {
        setPrevImage(URL.createObjectURL(inputFileRef.current.files[0]));
        setFile({
            ...file,
            file: inputFileRef.current.files[0],
        });
    };

    const ChangeName = (e) => {
        setFile({
            ...file,
            name: e.target.value,
        });
    };

    const ChangeDescription = (e) => {
        setFile({
            ...file,
            description: e.target.value,
        });
    };

    const ChangeCategory = (e) => {
        setFile({
            ...file,
            categorie: e.target.value,
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

    const uploadFile = (formData, asInfos) => {
        let uri = asInfos ? '' : '/compressed';
        postPicture(formData, uri)
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
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

    return (
        <div className='adminPanel__wrap'>
            <h2 className='adminPanel__title'>Ajout de photos aux Albums:</h2>
            <input type='file' onChange={ChangeFile} ref={inputFileRef} accept='image/*' />

            <input type='text' placeholder='Nom picture' onChange={ChangeName} />
            <input type='text' placeholder='Description' onChange={ChangeDescription} />
            <div className='test__categorie'>
                <p>Ajouter à la catégorie:</p>

                <div>
                    <input
                        type='radio'
                        id='macros'
                        name='categorie'
                        value='Macros'
                        defaultChecked
                        onChange={ChangeCategory}
                    />
                    <label htmlFor='macros'>Monde Macros</label>
                </div>

                <div>
                    <input
                        type='radio'
                        id='portraits'
                        name='categorie'
                        value='Portraits'
                        onChange={ChangeCategory}
                    />
                    <label htmlFor='portraits'>Studio Portraits</label>
                </div>

                <div>
                    <input
                        type='radio'
                        id='graphistes'
                        name='categorie'
                        value='Graphistes'
                        onChange={ChangeCategory}
                    />
                    <label htmlFor='graphistes'>Au Café des Graphistes</label>
                </div>
            </div>

            <img src={prevImage} alt='' width='300' />
            <button onClick={postPic}>POST Pic</button>
        </div>
    );
}
