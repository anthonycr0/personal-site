import * as React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

import { ProjectData } from '../Projects';

export interface Props {
  projectData: ProjectData,
}

class Project extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { url } = this.props.projectData;

    if (url.match(/http/)) {
      return (
        <a href={url} className="project" target="_blank">
          { this.getImageTemplate() }
          { this.getInfoTemplate() }
        </a>
      );
    }
    return (
      <Link to={url} className="project">
        { this.getImageTemplate() }
        { this.getInfoTemplate() }
      </Link>
    )
  }

  private getStyle(): any {
    return {
      backgroundColor: this.props.projectData.backgroundColor,
      color: this.props.projectData.textColor
    };
  }

  private getImageTemplate(): any {
    const { image } = this.props.projectData;

    return (
      <div className="project-image">
        <img src={image} alt=""/>
      </div>
    );
  }

  private getInfoTemplate(): any {
    const { title, desc } = this.props.projectData;

    return (
      <div className="project-info" style={this.getStyle()}>
        <h2 className="project-title">{title}</h2>
        <p className="project-desc">{desc}</p>
      </div>
    );
  }

}

export default Project;