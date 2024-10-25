import React from "react";
import {Link} from 'react-router-dom';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

 function Navigation() {
    return (        
    <nav>
        <ul>
            <li>
                <Link to='/aboutMe'>About Me</Link>
            </li>
            <li>
                <Link to='/portfolio'>Porfolio</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to='/resume'>Resume</Link>
            </li>
        </ul>    
    </nav>
    );
 };

export default Navigation;