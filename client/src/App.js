import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SideLinks from './components/SideLinks';

import { Routes, Route } from 'react-router-dom';


import './App.css';
import { useState } from 'react';
import projects from './data/projects';

function App() {

  const [showHeader, setShowHeader] = useState(false);

  // used for the side links
  const [showGithub, setShowGithub] = useState(false);
  const [showDiscord, setShowDiscord] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showInsta, setShowInsta] = useState(false);


  return (

    <div className="App">

      <Header onMouseEnter={() => setShowHeader(true)} isVisible={showHeader} />
      <SideLinks
        showGithub={showGithub}
        setShowGithub={setShowGithub}

        showDiscord={showDiscord}
        setShowDiscord={setShowDiscord}

        showSpotify={showSpotify}
        setShowSpotify={setShowSpotify}

        showInsta={showInsta}
        setShowInsta={setShowInsta}
      />

      <main onMouseEnter={() => setShowHeader(false)}>
        <Routes>
          <Route
          path='/'
          element={
            
            <Home
            showGithub={showGithub}
            showDiscord={showDiscord}
            showSpotify={showSpotify}
            showInsta={showInsta}
            />
          }
          />
          <Route path='/projects' element={<Projects />} />
          </Routes>


          {/* <Projects /> */}
      </main>
      {/* <Footer /> */}

    </div>
  );
}
export default App;
