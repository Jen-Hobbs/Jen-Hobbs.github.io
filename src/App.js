import React, { Component } from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import Skills from './views/Skills';
import ProjectDetails from './views/ProjectDetails'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Projects" component={Projects}/>
            <Route path="/Skills" component={Skills} exact />
          </Switch> 
      </BrowserRouter>
    );
  }
}
export default App;
