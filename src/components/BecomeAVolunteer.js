import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class BecomeAVolunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      hear: "Word of Mouth",
      success: false,
      sucessMessage: "",
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
    // console.log(this.state);

    // send info to org email
    const {
      email,
      subject,
      message,
      name: fullname,
      hear: referrer,
    } = this.state;
    const raw = JSON.stringify({ email, subject, fullname, message, referrer });

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
          hear: "Word of Mouth",
        });
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then((response) => {
        // response = {status: 'success', message: "message sent successfully"
        this.setState({
          success: true,
          sucessMessage: "Thank you choosing to be part of us!",
        });
        setTimeout(() => {
          this.setState({
            sucessMessage: ""
          });
        }, 2000);
      })
      .catch((err) => {
        this.setState(
          {
            error: true,
            errorMessage: ' Ooops! An error occurred while processing your request. Please try again!'
          });
          setTimeout(() => {
            this.setState({
              errorMessage: ""
            });
          }, 2000);
      });
  };

  render() {
    const { name, subject, email, message, hear } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col lg={8}>
            <p>Please take your time to familiarize yourself with the commitment we expect from all Volunteers and the basic requirements for anyone wishing to become a volunteer</p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} sm={12}>
            <form onSubmit={this.handleSubmit} className="volunteer-form">
                {
                    this.state.success && <div className="submit-success">{this.state.sucessMessage}</div>
                }
                {
                    this.state.error && <div className="submit-error">{this.state.errorMessage}</div>
                }
              <div>
                <h4 className="volunteer-title">SUBSCRIBE</h4>
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
                <input type="subject" className="form-control" id="subject" placeholder="Subject" required value={subject} onChange={this.handleChange}/>
                <div className="invalid-feedback">Please fill out the subject</div>
              </div>
              <div className="form-group">
                <label htmlFor="hear">How did you here about us</label>
                <select name="hear" id="hear" className="form-control" value={hear} onChange={this.handleChange} required>
                  <option value="Word of Mouth">Word of Mouth</option>
                  <option value="UNESPIC official website">UNESPIC Official Website</option>
                  <option value="Former Volunteer">Former Volunteer</option>
                  <option value="Internet job board">Internet job board</option>
                  <option value="Job or career fair">Job or Career Fair</option>
                  <option value="Government Ministry Website">Government Ministry Website</option>
                  <option value="Information through a Proffessional Association">Information through a Proffessional Association</option>
                  <option value="Social Media">Social Media</option>
                  <option value="other">Other</option>
                </select>
                <div className="invalid-feedback">Please fill out this field</div>
              </div>
              <div className="form-group">
                <textarea name="message" id="message" cols="30" rows="3" placeholder="Message" className="form-control" required value={message} onChange={this.handleChange}></textarea>
                <div className="invalid-feedback">Please fill out your message</div>
              </div>
              <div className="submit">
                  <button type="submit" className="btn btn-outline-warning">SEND NOW</button>
              </div>
            </form>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default BecomeAVolunteer;
