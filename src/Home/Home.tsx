import * as React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Header from '../Shared/Header/Header';

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <Header/>
        Home!
        <Link to="/original">June 2017</Link>

      </div>
    );
  }
}

export default Home;