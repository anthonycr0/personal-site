import * as React from 'react';
import Header from '../../Shared/Header/Header';
import Project from './Project/Project';
import './Projects.css';

export interface ProjectsData {
  data: ProjectData[]
}

export interface ProjectData {
  title: string,
  desc: string,
  color: string,
  image: string
}

class Projects extends React.Component {

  private projects: ProjectsData;

  constructor(props: any) {
    super(props);
    this.projects = {
      data: [
        {
          title: 'Streamee',
          desc: `Australia's first online, live TV platform`,
          color: '#F65800',
          image: ''
        },
        {
          title: 'Quick Maths',
          desc: `An app based on the viral hit, Man’s Not Hot.`,
          color: '#2C2C2C',
          image: ''
        }
      ]
    }
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
    return this.projects.data.map((project, index) => <Project projectData={project} key={index}/>);
  }
}

export default Projects;