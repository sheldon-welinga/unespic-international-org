import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: false,
      successMessage: "",
      success: false,
      errorMessage: "",
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

    const { email } = this.state;
    const raw = JSON.stringify({ email });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://unespic.herokuapp.com/api/v1/auth/resetpassword",requestOptions)
      .then((res) => res.json())
      .then((response) => {
          // response = {status: 'success', message: 'password reset code sent to <email>'}
          const { message, error } = response;

          // save auth details to localstorage
          if (error) {
            // code not sent
            this.setState({
              error: true,
              errorMessage: error,
            });
          } else {
              // message sent successfull
              sessionStorage.setItem("email", this.state.email);
              this.setState({
                success: true,
                successMessage: message,
              });
              
              setTimeout(() => {
                this.props.history.push("/donate-now/confirm-new-password");
              }, 3000);
          }
      })
      .catch((err) => {
        this.setState(
          {
            error: true,
            errorMessage: "Failed to send reset code",
          },
          () => console.log(err)
        );
        // console.log(err);
      });
  };

  render() {
    const { email } = this.state;
    return (
      <Row className="justify-center">
        <Col lg={5} md={7} sm={10}>
          <div className="all-pages-min-height">
            <form onSubmit={this.handleSubmit} className="volunteer-form">
              {
                this.state.success &&<div className="submit-success">{this.state.successMessage}</div>
              }
              {
                this.state.error &&<div className="submit-error">{this.state.errorMessage}</div>
              }
              <div>
                <h4>Reset Your Password</h4> <hr />
                <p>Forgot your account password? Enter your email address to get reset code.</p>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Email" required value={email} onChange={this.handleChange} />
                <div className="invalid-feedback">Please fill out your email address</div>
              </div>
              <button type="submit" className="btn btn-outline-warning">CONTINUE</button>
            </form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ForgotPassword;
