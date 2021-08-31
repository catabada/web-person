import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <footer className="footer_wrapper" id="contact">
  <div className="container">
    <section className="page_section contact" id="contact">
      <div className="contact_section">
        <h2 className="my-h2-contact">CONTACT</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 wow fadeInLeft">	
          <div className="contact_info">
            <div className="detail">
              <h4>Address</h4>
              <p>Xuan Thoi Thuong, HocMon dictrict, HCM city</p>
            </div>
            <div className="detail">
              <h4>My Phone Number</h4>
              <p>+84987609675</p>
            </div>
            <div className="detail">
              <h4>Email us</h4>
              <p>support@sitename.com</p>
            </div> 
          </div>
          <ul className="social_links">
            <li className="twitter animated bounceIn wow delay-02s"><a href="javascript:void(0)"><i className="fa fa-twitter" /></a></li>
            <li className="facebook animated bounceIn wow delay-03s"><a href="https://www.facebook.com/profile.php?id=100012670366408"><i className="fa fa-facebook" /></a></li>
            <li className="pinterest animated bounceIn wow delay-04s"><a href="javascript:void(0)"><i className="fa fa-pinterest" /></a></li>
            <li className="gplus animated bounceIn wow delay-05s"><a href="javascript:void(0)"><i className="fa fa-google-plus" /></a></li> 
          </ul>
        </div>
        <div className="col-lg-8 wow fadeInLeft delay-06s">
          <form name="sentMessage" id="contactForm" noValidate> 
            <div className="control-group">
              <div className="controls">
                <input type="text" className="form-control" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name" />
                <p className="help-block" />
              </div>
            </div> 	
            <div className="control-group">
              <div className="controls">
                <input type="email" className="form-control" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
              </div>
            </div> 	
            <div className="control-group">
              <div className="controls">
                <textarea rows={10} cols={100} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter your message" minLength={5} data-validation-minlength-message="Min 5 characters" maxLength={999} style={{resize: 'none'}} defaultValue={""} />
              </div>
            </div> 		 
            <div id="success"> </div> {/* For success/fail messages */}
            <button type="submit" className="btn btn-primary pull-right">Send</button><br />
          </form>
        </div>
      </div>
    </section>
  </div>
</footer>

            </div>
        );
    }
}

export default Contact;