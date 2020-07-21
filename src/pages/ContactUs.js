import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosGlobe, IoIosMailOpen } from "react-icons/io";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      successMessage: '',
      success: false,
      error: false,
      errorMessage: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    // send info to org email
    const { email, subject, message, name: fullname } = this.state;
    const raw = JSON.stringify({
      email,
      subject,
      fullname,
      message,
      referrer: "",
      sucessMessage: "",
      error: false,
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://unespic.herokuapp.com/api/v1/auth/sendcomments",
      requestOptions
    )
      .then((res) => {
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then((response) => {
        // response = {status: 'success', message: "message sent successfully"
        const { message } = response;
        this.setState({
          success: true,
          sucessMessage: message,
        });
        setTimeout(() => {
          this.setState({
            sucessMessage: "",
          });
        }, 2000);
      })
      .catch((err) => {
        this.setState(
          {
            error: true,
            errorMessage: 'Ooops! An error occurred while processing your request. Please try again!'
          });
          setTimeout(() => {
            this.setState({
              errorMessage: "",
            });
          }, 2000);
        
      });
  };

  render() {
    const { name, subject, email, message } = this.state;

    return (
      <React.Fragment>
          <div className="donate-header contact-header-image">
            <h1>CONTACT US</h1>
          </div>
          <Row className="justify-center">
            <Col lg={11}>
              <div className="all-pages-min-height">
                
                <Row className="contact">
                  <Col>
                    <h3 className="contact-header">CONTACT DETAILS</h3>
                    <p className="contact-details"><IoIosGlobe /><span>45 Amboseli Gardens</span></p>
                    <p className="contact-details"><FaPhoneAlt /><span>+254 723 767 481</span></p>
                    <p className="contact-details"><IoIosMailOpen /><span>info@unespic.org</span></p>
                  </Col>
                </Row>
                <Row className="contact">
                  <Col lg={7} md={12}>
                    <form onSubmit={this.handleSubmit} className="volunteer-form">
                        {
                          this.state.success && <div className="submit-success">{this.state.sucessMessage}</div>
                        }
                        {
                            this.state.error && <div className="submit-error">{this.state.errorMessage}</div>
                        }
                      <div>
                        <h2 className="volunteer-title">CONTACT US</h2>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <input type="text" name="name" id="name" placeholder="Full Name" className="form-control" value={name} onChange={this.handleChange} />
                            <div className="invalid-feedback">Please fill out your full name</div>                    
                        </div>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <input type="email" name="email" id="email" placeholder="Email Address" className="form-control" required value={email} onChange={this.handleChange} />
                            <div className="invalid-feedback">Please fill out your email address</div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="subject" className="form-control" id="subject" placeholder="Subject" required value={subject} onChange={this.handleChange} />
                        <div className="invalid-feedback">Please fill out the subject</div>
                      </div>
                      <div className="form-group">
                        <textarea name="message" id="message" cols="30" rows="4" placeholder="Message" className="form-control" required value={message} onChange={this.handleChange}></textarea>
                        <div className="invalid-feedback"> Please fill out your message</div>
                      </div>
                      <div className="submit">
                        <button type="submit" className="btn btn-outline-warning">SEND NOW</button>
                      </div>
                    </form>
                  </Col>
                  <Col lg={5} md={12}>
                    <h4>Our Map</h4>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963.2341556426512!2d36.75825138161778!3d-1.288364894058402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a22cb9e4b67%3A0xb4a8f466dfcdd78f!2sAmboseli%20Gardens%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1595232349068!5m2!1sen!2ske" title="Unespic Google Map" width="100%" height="400" frameBorder="0" style={{ border: 0 }} allowFullScreen=""aria-hidden="false" tabIndex="0"></iframe>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
      </React.Fragment>
    );
  }
}

export default ContactUs;
