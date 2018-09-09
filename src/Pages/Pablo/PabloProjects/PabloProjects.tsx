import * as React from 'react';
import { Link } from 'react-router-dom';
import '../Pablo.css';

import siteContent from '../../../site-content.json';
import { ProjectData } from '../../../Sections/Projects/ProjectData';

class PabloProjects extends React.Component {
  private projects: ProjectData[];

  constructor(props: any) {
    super(props);
    this.projects = siteContent.projects;
  }

  public render() {
    return (
      <div className="pablo">
        <div className="background">
          <div className="album-cover" id="album-cover">
            <table className="content-table">
              <tbody>
                <tr className="large-text">
                  <td/>
                  <td>Projects</td>
                </tr>
                <tr className="large-text">
                  <td>&nbsp;</td>
                </tr>
                {this.renderProjects()}
                {this.renderWhitespace()}
                <tr className="small-text">
                  <td colSpan={2}><Link to="/pablo">Back</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  public componentWillMount() {
    this.updateDimensions();
  }

  public componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  private updateDimensions() {
    if (document.documentElement.clientWidth >= 769) {
      const cover = document.getElementById('album-cover');
      if (cover) {
        const style = window.getComputedStyle(cover)
        const height = style.getPropertyValue('height');
        cover.style.width = height;
      }
    }
  }

  private renderProjects() {
    return this.projects.map((project, index) => 
      <tr className="large-text" key={index}>
        <td/>
        <td colSpan={3}><a href={project.url} target="_blank">{project.title}</a></td>
      </tr>
    );
  }

  private renderWhitespace() {
    const elements = [];
    for(let i = 0; i < 9; i++) {
      elements.push(
        <tr className="small-text" key={i}>
          <td>&nbsp;</td>
        </tr>
      );  
    }
  
    return elements;
  }
}

export default PabloProjects;