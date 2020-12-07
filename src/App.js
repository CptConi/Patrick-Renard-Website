import React from 'react';
import Navbar from './Components/Navbar';
import Accueil from './Components/Accueil/Accueil';
import About from './Components/About/About';
import Test from './Components/Test/Test';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Error from './Components/Error/Error';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route exact path='/accueil' component={Accueil} />
                    <Route exact path='/' component={Accueil} />
                    <Route exact path='/apropos' component={About} />
                    <Route exact path='/test' component={Test} />
                    <Route exact path='/admin-panel' component={AdminPanel} />
                    <Route component={Error} />
                    <footer className='footer'></footer>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
