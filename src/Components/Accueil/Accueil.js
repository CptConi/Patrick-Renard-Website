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
