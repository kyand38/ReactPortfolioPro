import React from "react";
import Card from './Portfolio1'

const Portfolio = () => {
    const projects = [
      {
        title: 'WorkFlow-Wizard',
        imageUrl: '/images/wizard.png', // Add the path to your image
        appLink: 'https://github.com/kyand38/WorkFlow-Wizard', // Deployed application link
        repoLink: 'https://github.com/kyand38/WorkFlow-Wizard',
      },
      {
        title: 'README-Factory',
        imageUrl: '/images/README1_optimized.png', // Add the path to your image appLink
        appLink: 'https://github.com/kyand38/README-Factory',
        repoLink: 'https://github.com/kyand38/README-Factory',
      },
      {
        title: 'Simple Contact Form',
        imageUrl: '/images/smiles.png', // Add the path to your image
        appLink: 'https://kyand38.github.io/HappyLanding/', // Deployed application link
        repoLink: 'https://github.com/kyand38/HappyLanding',
      },
      {
        title: 'Digital-Postcard',
        imageUrl: '/images/postCard_optimized.png', // Add the path to your image
        appLink: 'https://kyand38.github.io/Digital-Postcard/', // Deployed application link
        repoLink: 'https://github.com/kyand38/Digital-Postcard',
      },
      {
        title: 'RideEngineer',
        imageUrl: '/images/vehicles.png', // Add the path to your image
        appLink: 'https://github.com/kyand38/RideEngineer', // Deployed application link
        repoLink: 'https://github.com/kyand38/RideEngineer',
      },
      {
        title: 'ReactPortfolioPro',
        imageUrl: '/images/ReactPorfolio_optimized.png',
        appLink: 'https://github.com/kyand38/ReactPortfolioPro',
        repoLink: 'https://github.com/kyand38/ReactPortfolioPro',
      },
    ];
  
    return (
      <div className="container">
        <h2 className="text-center my-5">My Projects</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              appLink={project.appLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </div>
    );
  };
  export default Portfolio;