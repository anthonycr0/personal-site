import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import ScrollToTop from './Components/ScrollToTop';
import Home from './Home/Home';
import Pablo from './Pages/Pablo/Pablo';
import PabloProjects from './Pages/Pablo/PabloProjects/PabloProjects';
import QuickMaths from './Pages/QuickMaths/QuickMaths';
import Original from './Pages/Original/Original';
import MacConcept from './Pages/MacConcept/MacConcept';
import OneRegDetail from './Pages/OneRegDetail/OneRegDetail';
import StreameeDetail from './Pages/StreameeDetail/StreameeDetail';
import UnihackDetail from './Pages/UnihackDetail/UnihackDetail';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/unihack-website" component={UnihackDetail}/>
            <Route path="/streamee" component={StreameeDetail}/>
            <Route path="/quick-maths" component={QuickMaths}/>
            <Route path="/auspost-registration" component={OneRegDetail}/>
            <Route path="/macos-concept" component={MacConcept}/>
            <Route exact path="/pablo" component={Pablo}/>
            <Route path="/pablo/projects" component={PabloProjects}/>
            <Route path="/original" component={Original}/>
            <Route component={Home}/>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
