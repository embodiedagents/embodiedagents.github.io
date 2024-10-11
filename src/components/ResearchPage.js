import React from 'react';
import './ResearchPage.css';

const researchProjects = [
  {
    id: 1,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: process.env.PUBLIC_URL + 'svl_robot.jpg', // Replace with path to your image
    linkUrl: 'https://www.google.com',
  },
  // ... more projects
  {
    id: 2,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: process.env.PUBLIC_URL + 'svl_robot.jpg', // Replace with path to your image
    linkUrl: 'https://www.google.com',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: process.env.PUBLIC_URL + 'svl_robot.jpg', // Replace with path to your image
    linkUrl: 'https://www.google.com',
  }
];

const ResearchPage = () => {
    return (
        <div className="research-page">
            <h1>Current Highlighted Projects</h1>
            <div className="projects-container">
                {researchProjects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">Check out our Link.</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResearchPage;
