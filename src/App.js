import React, { Component } from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './styles/App.css'
import SampleRouter from './components/SampleRouter'
import SideNavArea from './components/sideNavMenu/SideNavArea'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <SideNavArea/>
        <Link to = {'/SampleRouter'}>This is Link to the content</Link>
        <Switch>
          <Route path='/sampleRouter' component={SampleRouter}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
