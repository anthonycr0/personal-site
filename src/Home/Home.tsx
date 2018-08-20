import * as React from 'react';
import './Home.css';

import About from '../Sections/About/About';
import Projects from '../Sections/Projects/Projects';
import Art from '../Sections/Art/Art';

class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <div className="home-contents">
          <About/>
          <Projects/>
          <Art/>
        </div>
      </div>
    );
  }
}

export default Home;