import * as React from 'react';
import { Link } from 'react-router-dom';
import './Original.scss';

import { ProjectData } from '../../Sections/Projects/ProjectData';
import siteContent from '../../site-content.json';
import desktopImg from '../../Images/original/bg-desktop.jpg';
import mobileImg from '../../Images/original/bg-desktop.jpg';

class Original extends React.Component {
  private projects: ProjectData[];

  constructor(props: any) {
    super(props);
    this.projects = siteContent.projects;
  }

  public render() {
    return (
      <div className="original">
        <div className="original-contents">
          <img className="background" src={desktopImg}/>
          <img className="background-mobile" src={mobileImg}/>
          <div className="content">
            <div className="name">
              Anthony Roberts
            </div>
            <div className="description">
              Software Engineer<br/>
              Melbourne, VIC
            </div>
            <div className="main">
              <div className="title">
                About Me
              </div>
              <div className="info">
                Foodie 🍔, photographer 📱, skier ⛷.<br/>
                Oh and also a web/mobile dev and user experience experimenter.
              </div>

              <div className="title">
                Projects
              </div>
              <div className="info">
                {this.renderProjects()}
              </div>
              
              <div className="title">
                <Link to="/">← Home</Link>
              </div>
            </div>
            <div className="social">
              <a href={siteContent.links.linkedin} target="_blank">
                <svg className="social-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                  <path className="svg-path linkedin-icon" d="M340.865023,340.844445 L281.541153,340.844445 L281.541153,248.01111 C281.541153,225.877778 281.163365,197.4 250.718074,197.4 C219.839439,197.4 215.128198,221.522222 215.128198,246.433333 L215.128198,340.844445 L155.870996,340.844445 L155.870996,149.955556 L212.739242,149.955556 L212.739242,176.055555 L213.561487,176.055555 C221.472819,161.044445 240.828912,145.222222 269.685268,145.222222 C329.764715,145.222222 340.865023,184.744445 340.865023,236.155555 L340.865023,340.844445 Z M88.9802493,123.877778 C69.9241645,123.877778 54.5570709,108.466667 54.5570709,89.4666667 C54.5570709,70.4777778 69.9241645,55.0666667 88.9802493,55.0666667 C107.958554,55.0666667 123.358982,70.4777778 123.358982,89.4666667 C123.358982,108.466667 107.958554,123.877778 88.9802493,123.877778 Z M59.268313,340.844445 L59.268313,149.955556 L118.658851,149.955556 L118.658851,340.844445 L59.268313,340.844445 Z M370.410289,0 L29.5008194,0 C13.2225895,0 0,12.9111111 0,28.8444445 L0,371.133333 C0,387.066667 13.2225895,400 29.5008194,400 L370.410289,400 C386.721852,400 400,387.066667 400,371.133333 L400,28.8444445 C400,12.9111111 386.721852,0 370.410289,0 Z"/>
                </svg> /anthonycr0</a>
            </div>
            <div className="footer">
              © Anthony Roberts 2017.
              <br/>
              Shot on iPhone.
            </div>
          </div>
        </div>
      </div>
    );
  }

  private renderProjects() {
    return this.projects.map((project, index) => 
      <div className="og-project" key={index}>
        <a href={project.url} target="_blank">{project.title}</a>
        <br/>
      </div>
    );
  }
}

export default Original;