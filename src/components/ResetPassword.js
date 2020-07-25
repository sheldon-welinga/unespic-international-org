import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      confirmPassword: "",
      resetCode: "",
      successMessage: "",
      errorMessage: "",
      error: false,
      success: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.password.trim().length < 8) {
      document.getElementById("passwordShort").style.display = "block";
      return false;
    } else if (this.state.password !== this.state.confirmPassword) {
      document.getElementById("validate").style.display = "block";
      return false;
    } else {
      // validation checks if the reset passwords match and if length >7
      document.getElementById("passwordShort").style.display = "none";
      document.getElementById("validate").style.display = "none";

    //   console.log(this.state); //To display the text on the console
      // validation passed send reset info to server

      this.setState({
        password: "",
        confirmPassword: "",
      });

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const { resetCode: code, password } = this.state;

      const raw = JSON.stringify({
        email: sessionStorage.getItem("email"),
        password,
        code,
      });

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

            if (error) {
                // code sent is invalid
                this.setState({
                error: true,
                errorMessage: error,
                });
            } else {
                // message sent successfull
                sessionStorage.removeItem("email");
                this.setState({
                success: true,
                successMessage: message,
                });
                setTimeout(() => {
                this.props.history.push("/donate-now");
                }, 3000);
            }
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  render() {
    const { password, confirmPassword, resetCode } = this.state;
    return (
      <Row className="justify-center">
        <Col lg={6} md={8} sm={10}>
          <div className="all-pages-min-height">
            <form onSubmit={this.handleSubmit} className="volunteer-form">
              {
                this.state.success && <div className="submit-success">{this.state.successMessage}</div>
              }
              {
                this.state.error &&<div className="submit-error">{this.state.errorMessage}</div>
              }
              <div>
                <h4>Verify New Password</h4> <hr />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="resetCode" placeholder="Reset Code" required value={resetCode} onChange={this.handleChange} />
                <div className="password-validity" id="codeValidity">Sorry!! The code you entered is incorrect</div>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="New Password" required value={password} onChange={this.handleChange}/>
                <div className="password-validity" id="passwordShort">Sorry!! Your password is too short</div>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm New Password" required value={confirmPassword} onChange={this.handleChange} />
                <div className="password-validity" id="validate">Sorry!! Passwords do not match</div>
              </div>
              <button type="submit" className="btn btn-outline-warning">RESET PASSWORD</button>
            </form>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ResetPassword;
