import React from "react";
import {NavLink} from 'react-router-dom';
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
import './navigation.css'
 function Navigation() {



    return (        
    <nav>
        <ul>
            <li>
                <NavLink to='/aboutMe'>About Me</NavLink>
            </li>
            <li>
                <NavLink to='/portfolio'>Porfolio</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to='/resume'>Resume</NavLink>
            </li>
        </ul>    
    </nav>
    );
 };

export default Navigation;