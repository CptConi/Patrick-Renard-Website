import React from 'react';
import Title from './Components/Text/Title';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import sectionText from './content';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Title />
            {sectionText.map((section) => {
                return (
                    <Section
                        classe={section.classe}
                        title={section.title}
                        description={section.description}
                    />
                );
            })}
        </div>
    );
}

export default App;
