import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link} from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "Male",
      email: "",
      password: "",
      confirmPassword: "",
      check: false,
      loggedIn : false,
      error: false,
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
      // validation checks ok sign up user
      document.getElementById("passwordShort").style.display = "none";
      document.getElementById("validate").style.display = "none";

      console.log(this.state); //To display the text on the console

      const { name: fullname, gender, email, password, date: dob } = this.state;
      const raw = JSON.stringify({ fullname, gender, email, password, dob });

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(
        "https://unespic.herokuapp.com/api/v1/auth/register",
        requestOptions
      )
        .then((res) => {
          this.setState({
            name: "",
            gender: "Male",
            email: "",
            password: "",
            confirmPassword: "",
            check: false,
          });
          if (res.ok) {
            // console.log(res)
                        // after success register login user direct using password and email in the state
              const raw = JSON.stringify({ email, password });
            
              const myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow",
              };
            
              fetch("https://unespic.herokuapp.com/api/v1/auth/login", requestOptions)
                  .then((res) => {
                      this.setState({
                      email: "",
                      password: "",
                });
                if (res.ok) {
                     return res.json();
                }
                throw new Error(res.statusText);
               })
                .then((response) => {
                  // response = {status: 'success', data: {token: jwtToken, userId: userId, user: {fullname, gender, email}}}
                   const { data } = response;
            
                   // save auth details to localstorage
                    delete data.message;
            
                    localStorage.setItem("user", JSON.stringify(data));
                            
                    this.props.history.push("/dashboard/donate");
                })
                .catch((err) => {
                   this.setState({
                         error: true
                  }, ()=> console.log(err))
                            // console.log(err);
               });            
          }
        })
        .catch((err) => {
          this.setState({
            error: true
          })
          console.log(err)
        });
    }
  };

  render() {
    const { name, gender,email, password, confirmPassword, check} = this.state;
    return (
      <React.Fragment>
        <div className="donate-header">
        <h4>DONATE</h4>
      </div>
      <Row className="justify-center">
        <Col lg={11}>
          <div className="all-pages-min-height">
            <Row className="justify-content-center">
              <Col xs={12} lg={5} md={6}>
              <h5 className="donate-header-text">Create account to donate</h5>
              <form onSubmit={this.handleSubmit} id="donate">
              <h5 className="donate-header-text">SIGN UP</h5>
                <div className="form-group">
                  <p>
                    Please enter your name as it appears on an official
                    document
                  </p>
                </div>
                <div className="form-group">
                  <input type="text" name="name" id="name" placeholder="Full Names" className="form-control" required value={name} onChange={this.handleChange}/>
                  <div className="invalid-feedback">
                    Please fill out your full names
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="gender" className="col-form-label">Gender</label>
                  <select name="gender" id="gender" className="form-control" value={gender} onChange={this.handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select your gender
                  </div>
                </div>
                <div className="form-group">
                  <input type="email" name="email" id="email" placeholder="Email Address" className="form-control" required value={email} onChange={this.handleChange}/>
                  <div className="invalid-feedback">
                    Please fill out your email address
                  </div>
                </div>
                <div className="form-group">
                  <input type="password" name="password" id="password" placeholder="Password" className="form-control" required value={password} onChange={this.handleChange}/>
                </div>
                <div className="password-validity" id="passwordShort">
                  Sorry!! Your password is too short
                </div>
                <div className="form-group">
                  <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="form-control" required value={confirmPassword} onChange={this.handleChange}/>
                </div>
                <div className="password-validity" id="validate">
                  Sorry!! Passwords do not match
                </div>
                <div className="input-group">
                  <p>
                  <label htmlFor=""></label>
                    <input type="checkbox" name="check" id="check" value={check} onChange={this.handleChange} required />{" "}
                    I have read and accept the{" "}
                    <Link to="/donate/terms-and-conditions-of-use-and-privacy-policy">
                      Terms and Conditions of use and privacy policy.
                    </Link>{" "}
                  </p>
                </div>
                <div className="submit">
                  <button className="btn btn-outline-warning" type="submit">Sign Up</button>
                </div>
                <p className="donate-header-title form-footer">Already have an account?
                    <strong><Link to="/donate-now">&nbsp;Login</Link></strong> 
                </p>
              </form> 
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      </React.Fragment>
    );
  }
}

export default Register;
