import React, { useState, useEffect } from 'react';
import { getLandingPagePics } from "../../Services/PictureService";
import Title from './Text/Title';
import Section from './Section';
import sectionText from '../../Services/content';

export default function Accueil() {
    const [landingPagePictures, setlandingPagePictures] = useState({
        macros: '',
        portraits: '',
        graphistes: '',
    });
    
    const [content, setContent] = useState(sectionText)
    console.log(content);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getLandingPagePics();
            const macros = response.data.filter(
                (pic) => pic.category === 'macros'
            )[0].halfSizePath
            const portraits = response.data.filter((pic) => pic.category === 'portraits')[0]
                .halfSizePath;
            const graphistes = response.data.filter((pic) => pic.category === 'graphistes')[0]
                .halfSizePath;
            const oldData = [...content]
            oldData[0].imagePath = macros;
            oldData[1].imagePath = portraits;
            oldData[2].imagePath = graphistes;
            setContent(oldData);

        };
        fetchData();
    }, []);

    

    return (
        <div>
            <Title />
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
    );
}
