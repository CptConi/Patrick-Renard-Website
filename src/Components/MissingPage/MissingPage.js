import React from 'react';
import { Link } from 'react-router-dom';
import './MissingPage.css'

export default function Error() {
    return (
        <div>
            <h2 className='error__title'>Cette page n'existe pas ...</h2>
            <p className='error__text'>
                Souhaitez-vous <Link to="/accueil">retourner à l'accueil</Link> ?
            </p>
        </div>
    );
}
