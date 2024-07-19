import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { title: 'Project 1', description: 'Description 1', image: 'image1.jpg', link: 'link1' },
  { title: 'Project 2', description: 'Description 2', image: 'image2.jpg', link: 'link2' },
];

const Projects = () => (
  <div className="projects">
    <h1>My Projects</h1>
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
);

export default Projects;
