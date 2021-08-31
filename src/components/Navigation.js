import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>
             <header id="header_wrapper">
  <div className="container">
    <div className="header_box">
      <nav className="navbar navbar-inverse" role="navigation">
  

        <div className="navbar-header">
          <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
        </div>
        <div id="main-nav" className="collapse navbar-collapse navStyle">
          <ul className="nav navbar-nav" id="mainNav">
          <a className="nav-brand" href="/">HUUAN</a>
            <li className="active"><Link to="/" className="scroll-link">Home</Link></li>
            <li><Link to="/about" className="scroll-link">About Me</Link></li>
            <li><Link to="/mylab" className="scroll-link">My lab</Link></li> 
            <li><Link to="/result" className="scroll-link">Result</Link></li>
            <li><Link to="/contact" className="scroll-link">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>

            </div>
        );
    }
}

export default Navigation;
