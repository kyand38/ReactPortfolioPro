import React from "react";
import {NavLink} from 'react-router-dom';
import '../styles/navigation.css'
// import AboutMe from './components/AboutMe';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
 function Navigation() {

    return (        
    <nav>
        <ul className="nav-links">
            <li className='nav-item'>
                <NavLink to="/" className={({ isActive }) => isActive ? "active nav-item" : "nav-item"}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/aboutMe' className={({ isActive }) => isActive ? "active nav-item" : "nav-item"}>About Me</NavLink>
            </li>
            <li>
                <NavLink to='/portfolio' className={({ isActive }) => isActive ? "active nav-item" : "nav-item"}>Portfolio</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className={({ isActive }) => isActive ? "active nav-item" : "nav-item"}>Contact</NavLink>
            </li>
            <li>
                <NavLink to='/resume' className={({ isActive }) => isActive ? "active nav-item" : "nav-item"}>Resume</NavLink>
            </li>
        </ul>    
    </nav>
    );
 };

export default Navigation;