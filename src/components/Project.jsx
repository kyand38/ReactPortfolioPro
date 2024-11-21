import React from "react";
import Card from './Portfolio'

const Portfolio = () => {
  const projects = [
    {
      title: 'WorkFlow-Wizard',
      imageUrl: '/images/wizard.png',
      appLink: 'hhttps://drive.google.com/file/d/1NfzJKM4aczJ76tInmfGUIh3Ey10eAxa0/view?usp=sharing',
      repoLink: 'https://github.com/kyand38/WorkFlow-Wizard',
    },
    {
      title: 'README-Factory',
      imageUrl: '/images/README1_optimized.png',
      appLink: 'https://drive.google.com/file/d/1ucGPrY1MG42VLOuGEFCuI3j67o0JlL-M/view?usp=sharing',
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
      imageUrl: '/images/postCard_optimized.png',
      appLink: 'https://kyand38.github.io/Digital-Postcard/',
      repoLink: 'https://github.com/kyand38/Digital-Postcard',
    },
    {
      title: 'RideEngineer',
      imageUrl: '/images/vehicles.png',
      appLink: 'https://drive.google.com/file/d/16kKZAIIUIUNkQzF40f_74kM5cuYek7_V/view?usp=sharing',
      repoLink: 'https://github.com/kyand38/RideEngineer',
    },
    {
      title: 'ReactPortfolioPro',
      imageUrl: '/images/ReactPorfolio_optimized.png',
      appLink: 'https://reactportfoliopro.netlify.app/',
      repoLink: 'https://github.com/kyand38/ReactPortfolioPro',
    },
    {
      title: 'Apollo-Graph-Reads',
      imageUrl: '/images/AGRScreenshot.png',
      appLink: 'https://apollo-8bcm.onrender.com/',
      repoLink: 'https://github.com/kyand38/Apollo-Graph-Reads',
    }
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