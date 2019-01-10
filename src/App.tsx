import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import ScrollToTop from './Components/ScrollToTop';
import Home from './Home/Home';
import Pablo from './Pages/Pablo/Pablo';
import PabloProjects from './Pages/Pablo/PabloProjects/PabloProjects';
import QuickMaths from './Pages/QuickMaths/QuickMaths';
import Original from './Pages/Original/Original';
import MacConcept from './Pages/MacConcept/MacConcept';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/quick-maths" component={QuickMaths}/>
            <Route exact path="/macos-concept" component={MacConcept}/>
            <Route exact path="/pablo" component={Pablo}/>
            <Route exact path="/pablo/projects" component={PabloProjects}/>
            <Route exact path="/original" component={Original}/>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
