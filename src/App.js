import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './styles/App.css'
import SampleRouter from './components/SampleRouter'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Link to = {'/SampleRouter'}>SampleRouter</Link>
        <Switch>
          <Route path='/sampleRouter' component={SampleRouter}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
