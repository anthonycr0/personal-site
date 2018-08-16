import * as React from 'react';
import './Project.css';

import testProject from '../../../Images/test2.png';

class Project extends React.Component {
  public render() {
    return (
      <a className="project" href="">
        <div className="project-image">
          <img src={testProject} alt=""/>
        </div>
        
        <div className="project-info">
          <h2 className="project-title">Streamee</h2>
          <p className="project-desc">Australia's first online, live TV platform</p>
        </div>
      </a>
    );
  }
}

export default Project;