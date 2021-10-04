import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import About from './Components/About/About';
import Accueil from './Components/Accueil/Accueil';
import Gallery from './Components/Gallery/Gallery';
import MissingPage from './Components/MissingPage/MissingPage';

function App() {
    return (
        <Router>
            <div className='App'>
                <Route
                    render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition key={location.key} timeout={500} classNames='fade'>
                                <Switch location={location}>
                                    <Route exact path='/accueil' component={Accueil} />
                                    <Route exact path='/' component={Accueil} />

                                    <Route exact path='/apropos' component={About} />

                                    {/* <Route exact path='/admin-panel' component={AdminPanel} /> */}

                                    <Route exact path='/mondes-macros' component={Gallery} />
                                    <Route exact path='/studio-portrait' component={Gallery} />
                                    <Route
                                        exact
                                        path='/au-cafe-des-graphistes'
                                        component={Gallery}
                                    />
                                    <Route component={MissingPage} />
                                    <footer className='footer'></footer>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}
                />
            </div>
        </Router>
    );
}

export default App;
