import * as React from 'react';
import { Link } from 'react-router-dom';
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
    <Link to="/original" className="project">
      <div className="project-image">
          <img src={testProject} alt=""/>
        </div>
        
        <div className="project-info" style={style}>
          <h2 className="project-title">{projectData.title}</h2>
          <p className="project-desc">{projectData.desc}</p>
        </div>
    </Link>
  );
}

export default Project;