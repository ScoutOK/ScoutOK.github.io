import React from 'react';

import projects from '../../public/data/projects';

import Project from './Project';

export default (props) => {
  return (
    <section id='projects'>
      <h2>Selected Projects</h2>
      {projects.map((project, idx) => {
        return (
          <Project project={project} key={project.id}/>
        )
      })}
    </section>
  )
}