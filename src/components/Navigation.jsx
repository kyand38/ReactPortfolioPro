import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css'
function Navigation() {

    return (
        <nav className='container d-flex justify-content-end'>
            <ul className="nav-links ">
                <li className='nav-item'>
                <NavLink to="/" className={({ isActive }) => isActive ? "active nav-item rounded" : "nav-item rounded"}></NavLink>
            </li>
                <li>
                    <NavLink to='/aboutme' className={({ isActive }) => isActive ? "active nav-item rounded" : "nav-item rounded"}>About Me</NavLink>
                </li>
                <li>
                    <NavLink to='/project' className={({ isActive }) => isActive ? "active nav-item rounded" : "nav-item rounded"}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? "active nav-item rounded" : "nav-item rounded"}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/resume' className={({ isActive }) => isActive ? "active nav-item rounded" : "nav-item rounded"}>Resume</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;