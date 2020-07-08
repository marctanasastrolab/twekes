import React from 'react';
import Benefits from './Benefits.js';
import Footer from './Footer.js';
import HeroUnit from './HeroUnit.js';
import HowItWorks from './HowItWorks.js';
import Merchants from './Merchants.js';
import Reviews from './Reviews.js';
import NavBar from './NavBar.js';
import WebExtension from './WebExtension';
import './App.css';

function App() {
  return (
    <div>
        <NavBar />
        <HeroUnit />
        <HowItWorks />
        <Benefits />
        <Merchants />
        <Reviews />
        <WebExtension />
        <Footer />

    </div>
  );
}

export default App;