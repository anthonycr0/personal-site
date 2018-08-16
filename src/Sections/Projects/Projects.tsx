import * as React from 'react';
import Header from '../../Shared/Header/Header';
import Project from './Project/Project';
import './Projects.css';

class Projects extends React.Component {
  public render() {
    return (
      <div className="projects">
        <Header title="Projects" showIcons={false}/>
        <div className="project-container">
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </div>
      </div>
    );
  }
}

export default Projects;