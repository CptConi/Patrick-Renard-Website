import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="home">Accueil</a>
            <ul>
                <li className="nav-items">Tel: 06 13 59 40 86</li>
                <li className="nav-items">Mail: jules.photo@gmail.com</li>
                <li className="nav-items">Messenger / WhatsApp ...</li>
            </ul>
        </nav>
    );
}
