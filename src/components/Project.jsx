import React from "react";
import Card from './Portfolio'

const Portfolio = () => {
  const projects = [
    {
      title: 'WorkFlow-Wizard',
      imageUrl: '/images/wizard.png',
      appLink: 'https://drive.google.com/file/d/16kKZAIIUIUNkQzF40f_74kM5cuYek7_V/view?usp=sharing',
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
      title: 'CodexX',
      imageUrl: '/images/codexxImage.png',
      appLink: 'https://codexx-kg79.onrender.com',
      repoLink: 'https://github.com/kyand38/CodexX',
    },
    {
      title: 'Apollo-Graph-Reads',
      imageUrl: '/images/AGRScreenshot.png',
      appLink: 'https://apollo-8bcm.onrender.com/',
      repoLink: 'https://github.com/kyand38/Apollo-Graph-Reads',
    },
    {
      title: 'Trivia-Titans',
      imageUrl: '/images/TriviaTitans.png',
      appLink: 'https://trivia-titans.onrender.com',
      repoLink: 'https://github.com/kyand38/Trivia-Titans',
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center my-5 text-info">My Projects</h2>
      <div className="container border border-info rounded p-3">
      <text className="text-info text-center my-5">
          Thank you for taking the time to check out my work.
         Some of these projects have a link to a video walk through of a terminal/node-based application.
         Some of my projects are being hosted either by Netlify or Render. 
         Currently this website is my most complete as while I was flying through class I was focused on getting the minimum project requirements done before moving on to future development goals.
         That being said I am always looking for ways to improve my projects and my skills. 
         Because these applications are being hosted on free hosting sites they may shut down after a period of inactivity.
         I'm trying to stay on top of that but if you find a project that is not working please let me know.
         I hope you enjoy my work and I look forward to working with you in the future.
     </text>
     </div>
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