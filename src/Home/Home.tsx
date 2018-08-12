import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import About from '../Sections/About/About';

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <About/>
        Home!
        <Link to="/original">June 2017</Link>

      </div>
    );
  }
}

export default Home;