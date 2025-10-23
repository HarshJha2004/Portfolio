// ProjectSection.js
import React from 'react';
import '../Projects/Projects.css';
// import ai from '../../assets/AI-code.jpeg'
import English from '../../assets/English.jpg'
import newyear from '../../assets/newyear.jpeg'
import secureGen from '../../assets/secureGen.png'
import sweatlog from '../../assets/sweatlog.png'
import streamify from '../../assets/streamify.jpeg'
const projects = [
  
  {
    title: 'Lexicon',
    description: 'Lexicon is a powerful word memorization app designed to help you embark on a 365-day vocabulary challenge.',
    image:English,
    link: 'https://lexicon-app.vercel.app/'
  },
  {
    title: 'Secure-Gen',
    description: 'SecureGen is a full-stack web application that generates and manages passwords.',
    image: secureGen,
    link: 'https://secure-gen-password.vercel.app/'
  },
  {
    title: 'SweatLog',
    description: 'SweatLog is a 30-day workout tracker designed to keep your training structured, goal-driven, and brutally effective.',
    image: sweatlog,
    link: 'https://sweat-log.vercel.app/'
  }
];

const Projects = () => {
  return (
    <div className="project-section">
     <h1 id='projectsHeading'>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
