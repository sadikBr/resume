import React from 'react';

function Projects({ projects }) {
  return (
    <ul className='projects-list'>
      {projects.map((project) => (
        <li className='project' key={project}>
          {project}
        </li>
      ))}
    </ul>
  );
}

export default Projects;
