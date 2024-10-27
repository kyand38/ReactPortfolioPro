import React, { useState } from 'react';

const Card = ({ title, imageUrl, appLink, repoLink }) => {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Base styles for the card
  const cardStyle = {
    width: '18rem',
    backgroundColor: '#343a40', // dark background for bg-dark equivalent
    margin: '1rem',
    border: '2px solid #17a2b8', // border-info equivalent
    borderRadius: '5px',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    boxShadow: isHovered ? '0 0 15px 5px rgba(0, 255, 255, 0.6)' : 'none', // glow effect
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <div
      className="card"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt={title} className="card-img-top" />
      
      <div className="card-body text-center text-info">
        <h5>{title}</h5>
        
        <div className="d-flex justify-content-around mt-3">
          <a href={appLink} className="btn btn-outline-info" target="_blank" rel="noopener noreferrer">
            Link
          </a>
          <a href={repoLink} className="btn btn-outline-info" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;