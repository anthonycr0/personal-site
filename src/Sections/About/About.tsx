import * as React from 'react';
import Header from '../../Shared/Header/Header';
import './About.scss';
import profileImg from '../../Images/profile-photo.jpeg';

class About extends React.Component {
  public render() {
    return (
      <div className="about">
        <Header title="About Me" showIcons/>
        <div className="about-container">
          <img className="profile-pic" src={profileImg} alt="Photo of Anthony"/>
          <div className="about-content">
            <h1>Hi, I'm Anthony 👋</h1>
            <p>A 21 year-old Software Engineer / Designer from Melbourne, Australia.</p>
            <p>Food · Skiing · Photography · Tech</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;