import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
           <section id="aboutUs">
  <div className="inner_wrapper aboutUs-container fadeInLeft animated wow">
    <div className="container">
      <h2 className = "my-h2">ABOUT ME</h2>
      <div className="inner_section"> 
        <div className="row">
          <div className="col-lg-12 about-us">
            <div className="row">
              <div className="col-md-6 avatar"> <img className="img-responsive" src="template/img/avatar.jpg" align alternative="myavata" /> </div>
              <div className="col-md-6">
                <h3>INFORMATION ABOUT ME </h3>
                <div className = "row">
                  <div class="col-sm-4 col-title">
                    <p>Full Name: <br/></p>
                    <p>Date of birth: <br/></p>
                    <p>Id: <br/></p>
                    <p>Class: <br/></p>
                    <p>Faculty: <br/></p>
                    <p>School: <br/></p>
                  </div>
                  <div class="col-sm-5 col-content">
                    <p>Huynh Huu An <br/></p>
                    <p>25-09-2001 <br/></p>
                    <p>19130002 <br/></p>
                    <p>DH19DTA <br/></p>
                    <p>CNTT <br/></p>
                    <p>Nong Lam University <br/></p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</section>

            </div>
        );
    }
}

export default About;  