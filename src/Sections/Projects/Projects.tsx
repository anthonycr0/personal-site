import * as React from 'react';
import Header from '../../Shared/Header/Header';
import Project from './Project/Project';
import { ProjectData } from './ProjectData';
import './Projects.scss';

import siteContent from '../../site-content.json';

class Projects extends React.Component {

  private projects: ProjectData[];

  constructor(props: any) {
    super(props);
    this.projects = siteContent.projects;
  }

  public render() {
    return (
      <div className="projects">
        <Header title="Projects" showIcons={false}/>
        <div className="project-container">
          {this.renderProjects()}
        </div>
      </div>
    );
  }

  private renderProjects() {
    return this.projects.map((project, index) => <Project projectData={project} key={index}/>);
  }
}

export default Projects;