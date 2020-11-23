import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about__container">
            <h2 className="about__title">À propos de lui</h2>
            <div className="about__text--container">
                <p className="about__text">
                    Elevé à l'argentique et aux "chasseurs d'images" dès le début des années 80.
                </p>

                <p className="about__text">
                    Ses livres de chevet parlaient de technique ; de boitiers avec moult boutons et
                    molettes, et de gros objectifs avec plein de lentilles dedans... Ses lectures
                    l'orientent désormais vers la composition ; l'équilibre, les lignes, l'harmonie
                    qui suscitent une belle image.
                </p>

                <p className="about__text">
                    Archer depuis 1982, c'est naturellement qu'il immortalise ses compagnons d'arme
                    pendant une dizaine d'années.
                </p>

                <p className="about__text">
                    Est rapidement accrédité par la Fédération Française de Tir à l'Arc pour couvrir
                    les championnats nationaux.
                </p>

                <p className="about__text">
                    Au fil des années, deux passions émergent naturellement de sa pratique
                    photographique : le portrait et les mondes macroscopiques.
                </p>

                <p className="about__text">
                    En 2016, il aménage un studio à domicile. Il servira aussi bien aux portraits
                    qu'à la mise en scène de mondes lilliputiens.
                </p>

                {/* <img
                    className="about__picture"
                    src={aboutPic}
                    alt="Portrait de Patrick Renard, photographe"
                /> */}
            </div>
        </div>
    );
}
