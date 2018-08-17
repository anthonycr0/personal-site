import * as React from 'react';
import './Project.css';

import testProject from '../../../Images/test2.png';
import { ProjectData } from '../Projects';

export interface Props {
  projectData: ProjectData,
}

function Project({projectData}: Props) {
  const style = {
    backgroundColor: projectData.color
  };

  return (
    <a className="project" href="">
      <div className="project-image">
        <img src={testProject} alt=""/>
      </div>
      
      <div className="project-info" style={style}>
        <h2 className="project-title">{projectData.title}</h2>
        <p className="project-desc">{projectData.desc}</p>
      </div>
    </a>
  );
}

export default Project;