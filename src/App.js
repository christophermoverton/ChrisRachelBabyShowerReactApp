// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import './App.css';
import * as d3 from 'd3';

class App extends Component {

  componentDidMount() {
   // screen.orientation.lock('landscape');
  }

  render() {
    return (
    <Router>
        <div>
        <ul id="navcent">
            <li id="navbutton"><Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link></li>
            <li id="navbutton2"><Link to={'/dashboard'} >Dashboard</Link></li>
          </ul>     
          <Switch class="fre">
          
              <Route exact path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;