import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Welcome from './components/Welcome';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element= {<Welcome/>}/>
          <Route path='/AboutMe' element= {<AboutMe/>}/>
          <Route path='/Contact' element= {<Contact/>}/>
          <Route path='/Portfolio' element= {<Portfolio/>}/>
          <Route path='/Resume' element= {<Resume/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
