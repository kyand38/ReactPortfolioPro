import React from 'react';
import Navigation from './Navigation'



function Header() {
    const name = 'Kyle Anderson';
    return (
        <header className="bg-light text-dark py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="m-0">{name}</h1>
                {/* <Navigation/>                */}
            </div>    
        </header>
    );
};

export default Header;