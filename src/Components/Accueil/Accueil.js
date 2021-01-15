import React, { useState, useEffect } from 'react';
import { getLandingPagePics } from '../../Services/PictureService';
// import Section from './Section';
import sectionText from '../../Services/content';
import TitleLoading from './TitleLoading';
import MenuImage from './MenuImage';

import './Accueil.css';

export default function Accueil() {
    const [content, setContent] = useState(sectionText);
    const [loadingValue, setLoadingValue] = useState(5);

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
        // Handling Parallax
        const wrapper = document.querySelector('body');
        const title = document.querySelector('#titleRef');
        const imgMacros = document.querySelector('#menuImageRef__macros');
        const imgPortraits = document.querySelector('#menuImageRef__portraits');
        const imgGraphistes = document.querySelector('#menuImageRef__graphistes');
        wrapper.addEventListener('mousemove', (e) => {
            // TITLE
            title.style.top = `${50 + -e.clientY / 200}%`;
            title.style.left = `${50 + -e.clientX / 200}%`;
            // MACROS
            imgMacros.style.top = `${8 + -e.clientY / 1000}%`;
            imgMacros.style.left = `${4 + -e.clientX / 1000}%`;
            // PORTRAITS
            imgPortraits.style.top = `${20 + -e.clientY / 1000}%`;
            imgPortraits.style.left = `${60 + -e.clientX / 1000}%`;
            // GRAPHISTES
            imgGraphistes.style.top = `${65 + -e.clientY / 1000}%`;
            imgGraphistes.style.left = `${35 + -e.clientX / 1000}%`;
            
        });
        return () => {
            wrapper.removeEventListener('mousemove', () => {});
        };
        // eslint-disable-next-line
    }, []);

    const incrLoadingValue = () => {
        let addValue = Math.floor(100 / content.length);
        setLoadingValue(loadingValue + addValue);
        console.log('loadingValue', loadingValue);
    };

    return (
        <div className='Accueil__container'>
            <TitleLoading loadingValue={loadingValue} />
            {content.map((image) => {
                return (
                    <MenuImage
                        atlText={image.title}
                        path={image.imagePath}
                        imageIsLoaded={incrLoadingValue}
                        key={image.id}
                        category={image.category}
                    />
                );
            })}

            {/* <div className='sections__box'>
                {content.map((section) => {
                    return (
                        <Section
                            key={section.id}
                            classe={section.category}
                            title={section.title}
                            description={section.description}
                            image={section.imagePath}
                            urlLink={section.urlLink}
                        />
                    );
                })}
            </div> */}
        </div>
    );
}
