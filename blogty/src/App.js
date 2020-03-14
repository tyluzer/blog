import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './posts/home/home';
import TomatoWater from './posts/tomatoWater/tomatoWater';
import Building from './posts/building/building';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <Router>
      <div>
        <Switch>
          <Route path="/tomatoWater">
            <TomatoWater/>
          </Route>
          <Route path="/building">
            <Building/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
