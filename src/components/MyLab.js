import React, { Component } from 'react';
import Lab1 from '../mylabs/Lab1';
import NavLab from './NavLab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class MyLab extends Component {
    render() {
        return (
          <div>
            <Router>
            <NavLab />
              <Switch>
                {/* <Route path = '/lab1' component={Lab1} /> */}
              </Switch>
            </Router>
          </div>
        );
    }
}

export default MyLab;