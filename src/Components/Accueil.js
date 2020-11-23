import React from 'react'
import Title from './Text/Title';
import Section from './Section';
import sectionText from '../content';

export default function Accueil() {
    return (
        <div>
            <Title />
                {sectionText.map((section) => {
                    return (
                        <Section
                            key={section.id}
                            classe={section.classe}
                            title={section.title}
                            description={section.description}
                            image={section.image}
                        />
                    );
                })}
        </div>
    )
}
