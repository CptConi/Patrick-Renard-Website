import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Accueil from './Components/Accueil/Accueil';
import About from './Components/About/About';
import Test from './Components/Test/Test';
import Gallery from './Components/Gallery/Gallery';
import Slider from './Components/Gallery/Slider'
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
                    <Route exact path='/mondes-macros' component={Gallery} />
                    <Route exact path='/studio-portrait' component={Gallery} />
                    <Route exact path='/au-cafe-des-graphistes' component={Gallery} />
                    <Route exact path='/slider' component={Slider} />
                    <Route component={Error} />
                    <footer className='footer'></footer>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
