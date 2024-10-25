import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
