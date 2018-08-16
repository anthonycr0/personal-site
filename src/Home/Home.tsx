import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import About from '../Sections/About/About';
import Projects from '../Sections/Projects/Projects';

class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <div className="home-contents">
          <About/>
          <Projects/>
          <Link to="/original">June 2017</Link>
        </div>
      </div>
    );
  }
}

export default Home;