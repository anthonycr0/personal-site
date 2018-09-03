import * as React from 'react';
import { Link } from 'react-router-dom';
import './Original.css';

import siteContent from '../../site-content.json';
import { ProjectData } from '../../Sections/Projects/ProjectData';

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
          <img className="background" src="/Images/original/bg-desktop.jpg"/>
          <img className="background-mobile" src="/Images/original/bg-mobile.jpg"/>
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
                21 years old.<br/>
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
              <a href="https://twitter.com/anthonycr0" target="_blank">
                <svg className="social-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                  <path className="svg-path twitter-icon" d="M125.792,362.023505 C276.736,362.023505 359.296,236.967505 359.296,128.519505 C359.296,124.967505 359.296,121.431505 359.056,117.911505 C375.117302,106.294078 388.981688,91.9095748 400,75.4315045 C385.022065,82.0683329 369.133268,86.4207629 352.864,88.3435045 C369.995904,78.0872174 382.817976,61.9558563 388.944,42.9515045 C372.83452,52.5107895 355.210338,59.2476968 336.832,62.8715045 C311.393324,35.821813 270.97151,29.2013059 238.232788,46.7223833 C205.494067,64.2434608 188.5804,101.548716 196.976,137.719505 C130.990332,134.411497 69.5116125,103.244677 27.84,51.9755045 C6.0579641,89.4738201 17.1838061,137.445256 53.248,161.527505 C40.1878592,161.140425 27.4124699,157.617315 16,151.255505 C16,151.591505 16,151.943505 16,152.295505 C16.0106901,191.360992 43.5480238,225.008067 81.84,232.743505 C69.7579135,236.038545 57.0812894,236.520213 44.784,234.151505 C55.5351669,267.58227 86.345193,290.484046 121.456,291.143505 C92.3957606,313.982416 56.4969522,326.380748 19.536,326.343505 C13.0064571,326.330969 6.48326504,325.935624 0,325.159505 C37.5301752,349.243929 81.1986144,362.018975 125.792,361.959505"/>
                </svg> @anthonycr0</a><br/>
              <a href="https://linkedin.com/in/anthonycr0" target="_blank">
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