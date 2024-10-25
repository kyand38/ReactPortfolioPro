import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container text-center">
                <p>© 2024 Kyle Anderson. All Rights Reserved.</p>
                <div className="d-flex justify-content-center">
                    <a href="https://github.com/kyand38" target='_blank' rel="noopener noreferrer" className="text-light mx-3">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer" className="text-light mx-3">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="mailto:kyand2024@gmail.com" target='_blank' rel="noopener noreferrer" className="text-light mx-3">
                        <i className="fas fa-envelope"></i> Gmail
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;