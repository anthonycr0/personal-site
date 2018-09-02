import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home/Home';
import Pablo from './Pages/Pablo/Pablo';
import PabloProjects from './Pages/Pablo/PabloProjects/PabloProjects';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pablo" component={Pablo}/>
          <Route exact path="/pablo/projects" component={PabloProjects}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
