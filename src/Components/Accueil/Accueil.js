import React, { useState, useEffect } from 'react';
import { getLandingPagePics } from '../../Services/PictureService';
import Title from './Title';
import Section from './Section';
import sectionText from '../../Services/content';
import SlideGallery from './SlideGallery'

import './Accueil.css';

export default function Accueil() {
    const [content, setContent] = useState(sectionText);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLandingPagePics();
            const macros = response.data.filter((pic) => pic.category === 'macros')[0].halfSizePath;
            const portraits = response.data.filter((pic) => pic.category === 'portraits')[0]
                .halfSizePath;
            const graphistes = response.data.filter((pic) => pic.category === 'graphistes')[0]
                .halfSizePath;
            const responseData = [...content];
            responseData[0].imagePath = macros;
            responseData[1].imagePath = portraits;
            responseData[2].imagePath = graphistes;
            setContent(responseData);
        };
        fetchData();
        // eslint-disable-next-line
    },[]); 

    return (
        <div className='Accueil__container'>
            <Title />
            <SlideGallery/>
            <div className='sections__box'>
                {content.map((section) => {
                    return (
                        <Section
                            key={section.id}
                            classe={section.classe}
                            title={section.title}
                            description={section.description}
                            image={section.imagePath}
                            urlLink={section.urlLink}
                        />
                    );
                })}
            </div>
        </div>
    );
}
