import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-dark">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/AboutMe" />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Project" element={<Portfolio />} /> {/* Main Portfolio */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;