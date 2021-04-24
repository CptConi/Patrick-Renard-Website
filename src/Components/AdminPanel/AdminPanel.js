import './AdminPanel.css';

import React, { useState } from 'react';

import ManagePictures from './ManagePictures';
import PostPicture from './PostPicture';

export default function AdminPanel() {
    // STATE
    const [isVisible, setIsVisible] = useState({
        post: true,
        get: false,
    });

    const setPostVisible = () => {
        setIsVisible({
            post: true,
            get: false,
        });
    };

    const setGetVisible = () => {
        setIsVisible({
            post: false,
            get: true,
        });
    };

    return (
        <div className='ScrollZone'>
            <div className='adminpanel__container'>
                <div className='adminpanel__bloctab'>
                    <div
                        className={isVisible.post ? 'adminpanel__tab' : ' adminpanel__tab inactive'}
                        onClick={setPostVisible}>
                        Ajout de photos
                    </div>
                    <div
                        className={isVisible.get ? 'adminpanel__tab' : ' adminpanel__tab inactive'}
                        onClick={setGetVisible}>
                        Gestion des photos
                    </div>
                </div>
                <div className='adminpanel__display'>
                    {isVisible.post && <PostPicture />}
                    {isVisible.get && (
                        <div>
                            <ManagePictures />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
