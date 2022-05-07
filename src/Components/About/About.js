import './About.css';

import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../Assets/arrow.svg';

// import aboutPic from '../../Assets/about-picture.jpg';

export default function About() {
    return (
        <div className='about__container'>
            <Link to='/'>
                <img className='back-icon' src={arrow} alt='Back to home' />
            </Link>
            <h2 className='about__title'>À propos</h2>
            <div className='about__text--container'>
                <p className='about__text'>Patrick d'Andernos...un jeune de 60 ans.</p>
                <p className='about__text'>
                    Il a été élevé à l'argentique et aux "chasseurs d'images" dès le début des
                    années 80.
                </p>

                <p className='about__text'>
                    Ses livres de chevet parlaient de technique ; de boitiers avec moult
                    vistemboirs, boutons et molettes, ainsi que de gros objectifs avec plein de
                    lentilles dedans... Ses lectures l'orientent désormais vers la composition ;
                    l'équilibre, les lignes, l'harmonie qui créent la belle image.
                </p>

                <p className='about__text'>
                    Archer depuis 1982, c'est naturellement qu'il immortalise ses compagnons d'arme
                    depuis une douzaine d'année. Il est rapidement accrédité par la Fédération
                    Française de Tir à l'Arc pour couvrir les championnats nationaux.
                </p>

                <p className='about__text'>
                    Au fil des années, deux passions émergent naturellement de sa pratique
                    photographique : le portrait et les mondes macroscopiques.
                </p>

                <p className='about__text'>
                    En 2016, il aménage un studio à domicile. Il servira aussi bien aux portraits
                    qu'à la mise en scène de mondes lilliputiens.
                </p>

                <p className='about__text'>
                    La plupart des portraits sont réalisés en collaboration avec sa muse, Lilli, qui
                    apporte un coté sensible et féminin et contrebalance son coté sombre et obscur.
                </p>

                <p className='about__text'>
                    Le portrait réussi transcrit, à ses yeux, une expression qui caractérise le
                    modèle vis à vis de ses proches. A la fois ses traits physiques, mais aussi sa
                    posture, ses habitudes de vie, son univers, sa singularité, son caractère.
                    L’échange est primordial lors de la rencontre, il est indispensable de créer un
                    lien de confiance avec le sujet... pour provoquer quelque chose, saisir une
                    expression, une étincelle...
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
