import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Lab1 from '../mylabs/Lab1';
import Lab2 from '../mylabs/Lab2';
import Lab3 from '../mylabs/Lab3';
import Lab4 from '../mylabs/Lab4';
class NavLab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select:1  
    }
    this.selectLab = this.selectLab.bind(this);
  };
  setSelect = (num) => {
    this.setState({select:num})
  }
  selectLab = () => {
    switch (this.state.select) {
      case 1:
        return  <Lab1 />
      case 2:
        return  <Lab2 />
      case 3:
        return  <Lab3 />
      case 4:
        return  <Lab4 />
    
      default:
        break;
    }
   
  }
    render() {
        return (
            <div>
            <div id="Portfolio" className="content container-lab">
              <div className="container portfolio_title">
                <div className="section-title">
                  <h2 className="my-h2">MY LAB</h2>
                </div>
              </div>
              <div className="tab">
                <div className={this.state.select == 1 ? "selected element" : "element"} onClick={() => this.setSelect(1)}>
                  <p>Lab 1</p>
                </div>
                <div className={this.state.select == 2 ? "selected element" : "element"} onClick={() => this.setSelect(2)}>
                  <p>Lab 2</p>
                </div>
               <div className={this.state.select == 3 ? "selected element" : "element"} onClick={() => this.setSelect(3)}>
                  <p>Lab 3</p>
                </div>
                <div className={this.state.select == 4 ? "selected element" : "element"} onClick={() => this.setSelect(4)}>
                  <p>Lab 4</p>
                </div>
            <div className ="tab-content" >
              {this.selectLab()}
            </div>
            
          </div>
            </div>
          
            </div>
        );
    }
}

export default NavLab;