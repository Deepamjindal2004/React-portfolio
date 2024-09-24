import React from 'react';
import './Projects.css';

// Array of project data
const projects = [
  {
    title: 'Project A',
    description: 'This is a short description of Project A. It explains what the project does briefly.',
    tags: ['React', 'Express', 'Node'],
    demoLink: '#',
    sourceLink: '#',
    image: '/Project_A.jpeg',
  },
  {
    title: 'Project B',
    description: 'This is a short description of Project B. It covers the basic features of the project.',
    tags: ['JavaScript', 'API', 'MongoDB'],
    demoLink: '#',
    sourceLink: '#',
    image: '/Project_B.jpeg',
  },
  {
    title: 'Project C',
    description: 'This is a short description of Project C. It outlines the functionality of the project.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: '#',
    sourceLink: '#',
    image: '/Project_C.jpeg',
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            {/* Display project image */}
            <img src={project.image} alt={project.title} className="card-image" />
            {/* Project title */}
            <h2 className="card-title">{project.title}</h2>
            {/* Project description */}
            <p className="card-description">{project.description}</p>
            {/* Display project tags */}
            <div className="card-tags">
              {project.tags.map((tag, index) => (
                <span className="tag" key={index}>{tag}</span>
              ))}
            </div>
            {/* Links for demo and source code */}
            <div className="card-buttons">
              <a href={project.demoLink} className="card-button">Demo</a>
              <a href={project.sourceLink} className="card-button">Source</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
