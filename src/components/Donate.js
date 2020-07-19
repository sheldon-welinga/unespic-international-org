import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PaymentForm from "./PaymentForm";
import DashboardPaymentForm from "./DashboardPaymentForm";


class Donate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "Male",
      email: "",
      password: "",
      confirmPassword: "",
      date: "",
      check: false,
      loggedIn : false,
    };

    // console.log(this.props)
  }

  componentWillMount (){

    const userData = JSON.parse(localStorage.getItem("user"))

    if(userData) {
        this.setState({
           loggedIn : true,
           username : userData.user.fullname
        })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      date: date,
    });
  };

  //handle submit while validating the inputs
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
            date: "",
            check: false,
          });
          if (res.ok) {
            console.log(res)
            this.props.history.push("/donate-now/login");
          }
          throw new Error(res.statusText);
        })
        .catch((err) => console.error);
    }
  };

  render() {
    const {
      name,
      gender,
      email,
      password,
      confirmPassword,
      date,
      loggedIn,
      check,
    } = this.state;
    
    console.log(loggedIn)
    return (
      <Row className="justify-center">
        {loggedIn === true ? <Col lg={11}><Row className="justify-content-center">
            <Col xs={12}  className="donate-header">
              <h1>Donate Now</h1>
            </Col>
              <Col xs={12} md={8} lg={7} xl={7}>
              <div className="all-pages-min-height">
                  <Row className="justify-content-center">
                      <Col xs={12} sm ={3} md={3} lg={3} xl={5} className="Sidebar"></Col>
                      <Col xs={12}  sm={9} md={9} lg={9} xl={7} className="dashboardHeader">
                           <DashboardPaymentForm />
                      </Col>
                  </Row>
                </div>
              </Col>
          </Row> 
          </Col>
          
        :
        
        <Col lg={11}>
          <div className="all-pages-min-height">
            <div className="donate-header">
              <h1>Donate Now</h1>
            </div>
            <div>
              <Row className="justify-content-center">
                <Col lg={10} md={6} xs={12}>
                  <Row>
                    <Col md={12}>
                      <p className="donate-header-title">
                        Already have an account?{" "}
                        <Link to="/donate-now/login">
                          <b>Login</b>
                        </Link>
                      </p>
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                      <h5>Donate as a Guest</h5>
                      <PaymentForm />
                    </Col>

                    <Col lg={6} md={12} xs={12}>
                      <h5>Create account to donate</h5>
                      <form onSubmit={this.handleSubmit} id="donate">
                        <div className="form-group">
                          <p>
                            Please enter your name as it appears on an official
                            document
                          </p>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Names"
                            className="form-control"
                            required
                            value={name}
                            onChange={this.handleChange}
                          />
                          <div className="invalid-feedback">
                            Please fill out your full names
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="gender">Gender</label>
                          <select
                            name="gender"
                            id="gender"
                            className="form-control"
                            value={gender}
                            onChange={this.handleChange}
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select your gender
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="date">Date of Birth &nbsp;</label>
                          <DatePicker
                            selected={date}
                            onChange={this.handleDateChange}
                            placeholderText="DD/MM/YYYY"
                            className="form-control"
                            dateFormat="dd/MM/yyyy"
                            maxDate={new Date()}
                            value={date}
                            showYearDropdown
                            required
                          />
                          <div className="invalid-feedback">
                            Please fill out your date of birth
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            className="form-control"
                            required
                            value={email}
                            onChange={this.handleChange}
                          />
                          <div className="invalid-feedback">
                            Please fill out your email address
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="form-control"
                            required
                            value={password}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="password-validity" id="passwordShort">
                          Sorry!! Your password is too short
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            className="form-control"
                            required
                            value={confirmPassword}
                            onChange={this.handleChange}
                          />
                        </div>

                        <div className="password-validity" id="validate">
                          Sorry!! Passwords do not match
                        </div>
                        <div className="input-group">
                          <p>
                            <input
                              type="checkbox"
                              name="check"
                              id="check"
                              value={check}
                              onChange={this.handleChange}
                              required
                            />{" "}
                            I have read and accept the{" "}
                            <Link to="/donate/terms-and-conditions-of-use-and-privacy-policy">
                              Terms and Conditions of use and privacy policy.
                            </Link>{" "}
                          </p>
                        </div>
                        <button
                          className="btn btn-outline-warning"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </form>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        }
      </Row>
    );
  }
}

export default Donate;
