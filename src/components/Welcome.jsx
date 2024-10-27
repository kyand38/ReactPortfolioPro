import React from 'react';

const Welcome = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/welcome.png')`, // Path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '70vh', // Full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'cyan',
        fontSize: '2rem',
      }}
      className="bg-dark"
    >
      {/* Optional overlay text or elements can be added here */}
    </div>
  );
};

export default Welcome;