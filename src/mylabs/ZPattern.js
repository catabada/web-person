import React, { Component } from 'react';

class ZPattern extends Component {
    render() {
        return (
            <div>
                <div className = "container-zpattern">
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Z-PATTERN</a>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        
        <a className="nav-link" href="#"><i className="fa fa-home" />Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Couses</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Programs</a>
      </li>
    </ul>
  </div>
</nav>
            <div className = "row">
                <div className = "col-sm-3 col-sm-offset-6">
                    <h2>Login</h2>
                    <div className="row">
                        <input className="inputText" type="text" placeholder="Email or Username"/>
                  </div>
                    <div className="row">
                        <input className="inputText" type="password" placeholder="Password"/>
                  </div>
                    <div className="row">
                        <button className = "btnLogin" type="button">LOGIN</button>
                  </div>
                  <div className = "row signup">
                  You aren't a member?
                  <a href="#">Sign up now</a>
                </div>
                </div>
               
               
                
            </div>

                </div>
            </div>
        );
    }
}

export default ZPattern;