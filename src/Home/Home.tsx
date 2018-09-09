import * as React from 'react';
import './Home.css';

import About from '../Sections/About/About';
import Projects from '../Sections/Projects/Projects';
import Art from '../Sections/Art/Art';
import Footer from '../Sections/Footer/Footer';

class Home extends React.Component {
  public render() {
    return (
      <div className="home">
        <div className="home-contents">
          <About/>
          <Projects/>
          <Art/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;