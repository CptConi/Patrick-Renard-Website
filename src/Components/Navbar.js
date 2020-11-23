import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/accueil" className="home">Accueil</Link>
            <ul>
                <li className="nav-items">Tel: 06 13 xx xx xx</li>
                <li className="nav-items">Mail: jules.photo@gmail.com</li>
                <li className="nav-items">Messenger / WhatsApp ...</li>
            </ul>
        </nav>
    );
}
