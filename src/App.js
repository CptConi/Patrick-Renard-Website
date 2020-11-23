import React from 'react';

import Navbar from './Components/Navbar';

import Accueil from './Components/Accueil'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path='/accueil' component={Accueil}/>
                
                <footer className="footer"></footer>
            </div>
        </Router>
    );
}

export default App;
