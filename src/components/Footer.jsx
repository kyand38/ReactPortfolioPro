import React, { useState } from 'react';


function Footer() {

    // State to handle hover effect
    const [isHoveredGitHub, setIsHoveredGitHub] = useState(false);
    const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);
    const [isHoveredGmail, setIsHoveredGmail] = useState(false);

    // Base styles for the card
    const getAnchorStyle = (isHovered) => ({
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: isHovered ? '0 0 15px 5px rgba(0, 255, 255, 0.6)' : 'none', // glow effect
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    });

    return (
        <footer className="border-top rounded border-info bg-dark text-light py-4">
            <div className="container text-center">
                <p className='text-info'>© 2024 Kyle Anderson. All Rights Reserved.</p>
                <div className="d-flex justify-content-center">
                    <a href="https://github.com/kyand38" target='_blank' rel="noopener noreferrer" className="text-info mx-3"
                        style={getAnchorStyle(isHoveredGitHub)}
                        onMouseEnter={() => setIsHoveredGitHub(true)}
                        onMouseLeave={() => setIsHoveredGitHub(false)}>
                        <i className="fab fa-github text-info"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/kyle-anderson-595841338" target='_blank' rel="noopener noreferrer" className="text-info mx-3"
                        style={getAnchorStyle(isHoveredLinkedIn)}
                        onMouseEnter={() => setIsHoveredLinkedIn(true)}
                        onMouseLeave={() => setIsHoveredLinkedIn(false)}>
                        <i className="fab fa-linkedin text-info"></i> LinkedIn
                    </a>
                    <a href="mailto:kyand2024@gmail.com" target='_blank' rel="noopener noreferrer" className="text-info mx-3"
                        style={getAnchorStyle(isHoveredGmail)}
                        onMouseEnter={() => setIsHoveredGmail(true)}
                        onMouseLeave={() => setIsHoveredGmail(false)}>
                        <i className="fas fa-envelope text-info"></i> Gmail
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;