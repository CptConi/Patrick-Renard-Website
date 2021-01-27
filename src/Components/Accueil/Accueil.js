import React, { useState, useEffect } from 'react';
import { getLandingPagePics } from '../../Services/PictureService';
import sectionText from '../../Services/content';
import TitleLoading from './TitleLoading';
import PerspectiveMiniature from './PerspectiveMiniature';
import Section from './Section';

import './Accueil.css';

export default function Accueil() {
    const [content, setContent] = useState(sectionText);
    const [loadingValue, setLoadingValue] = useState(5);

    // Set visibility of each section
    const [sectionMacrosVisible, setSectionMacrosVisible] = useState(false);
    const [sectionPortraitsVisible, setSectionPortraitsVisible] = useState(false);
    const [sectionGraphistesVisible, setSectionGraphistesVisible] = useState(false);

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
            parrallaxElementMove(title, e, { posX: 50, posY: 50 }, 200);
            // // MACROS
            parrallaxElementMove(imgMacros, e, { posX: 4, posY: 8 }, 1000);
            // // PORTRAITS
            parrallaxElementMove(imgPortraits, e, { posX: 60, posY: 20 }, 1000);
            // // GRAPHISTES
            parrallaxElementMove(imgGraphistes, e, { posX: 35, posY: 65 }, 1000);
        });
        return () => {
            wrapper.removeEventListener('mousemove', () => {});
        };
        // eslint-disable-next-line
    }, []);

    const parrallaxElementMove = (elt, event, { posX, posY }, friction) => {
        let cursor = {
            x: event.clientX,
            y: event.clientY,
        };
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let xOffset = 0;
        let yOffset = 0;
        // Déplacement sur X
        xOffset = cursor.x - viewportWidth / 2;
        // Déplacement sur Y
        yOffset = cursor.y - viewportHeight / 2;
        elt.style.left = `${posX - xOffset / (friction * 1.5)}%`;
        elt.style.top = `${posY - yOffset / friction}%`;
    };

    const incrLoadingValue = () => {
        let addValue = Math.floor(100 / content.length);
        setLoadingValue(loadingValue + addValue);
    };

    const closeModalSection = () => {
        setSectionMacrosVisible(false);
        setSectionPortraitsVisible(false);
        setSectionGraphistesVisible(false);
    }
    

    return (
        <div className='Accueil__container'>
            <TitleLoading loadingValue={loadingValue} />
            
            {content.map((image) => {
                return (
                    // Each Menu Card
                    <div
                        className={`menuImage__${image.category} slideDown__${image.category}`}
                        id={`menuImageRef__${image.category}`}
                        key={image.id}
                        onClick={() => {
                            switch (image.category) {
                                case 'macros':
                                    setSectionMacrosVisible(true);
                                    console.log(
                                        'Setting ' + image.category + ' to visibility : true'
                                    );
                                    break;
                                case 'portraits':
                                    setSectionPortraitsVisible(true);
                                    console.log(
                                        'Setting ' + image.category + ' to visibility : true'
                                    );
                                    break;
                                case 'graphistes':
                                    setSectionGraphistesVisible(true);
                                    console.log(
                                        'Setting ' + image.category + ' to visibility : true'
                                    );
                                    break;
                                default:
                                    break;
                            }
                        }}>
                        <PerspectiveMiniature
                            image={image.imagePath}
                            urlLink={image.urlLink}
                            altText={image.category}
                            imageIsLoaded={incrLoadingValue}
                            title={image.title}
                            icon={image.icon}
                            description={image.description}
                        />
                    </div>
                );
            })}
            {content.map((section, index) => {
                // Each Section !ONLY IF Menu Card is clicked
                if (
                    (sectionMacrosVisible && index === 0) ||
                    (sectionPortraitsVisible && index === 1) ||
                    (sectionGraphistesVisible && index === 2) 
                ) {
                    return (
                        <div className='closeModalWrapper' onClick={closeModalSection}>
                            <Section
                                icon={section.icon}
                                title={section.title}
                                description={section.description}
                                category={section.category}
                                urlLink={section.urlLink}
                            />
                        </div>
                    );
                } else {
                    return('')
                }
            })}
        </div>
    );
}
