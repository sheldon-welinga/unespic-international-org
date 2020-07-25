import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      error: false,
    };

    // console.log(this.props)
  }

  UNSAFE_componentWillMount (){

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
    }

    document.getElementById("passwordShort").style.display = "none";

    // verifications ok => login user
    const { email, password } = this.state;
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
  };

  render() {
    const {
      email,
      password,
      loggedIn
    } = this.state;
    
    // console.log(loggedIn)
    return (
      <React.Fragment>
      <div className="donate-header">
        <h4>DONATE</h4>
      </div>
      <Row className="justify-center">
        {loggedIn === true ? <Col lg={11}><Row className="justify-content-center">
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
            <div>
              <Row className="justify-content-center">
                <Col lg={10} md={6} xs={12}>
                  <Row>
                    <Col lg={6} md={12} xs={12}>
                      <h5 className="donate-header-text">Donate as a Guest</h5>
                      <PaymentForm />
                    </Col>

                    <Col lg={1} className="or">
                      <h5>Or</h5>
                    </Col>

                    <Col lg={5} md={12} xs={12}>
                      <div className="form-group">
                          <h5 className="donate-header-text">Login to Donate</h5>
                      </div>
                    <form onSubmit={this.handleSubmit} className="donate-form">
                      <div className="form-group">
                          <h5 className="donate-header-text login">LOGIN</h5>
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Email Address" className="form-control" required value={email} onChange={this.handleChange}/>
                        <div className="invalid-feedback">Please fill out your email address</div>
                      </div>
                      <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="Password" className="form-control" required value={password} onChange={this.handleChange}/>
                      </div>
                      <div className="password-validity" id="passwordShort">
                        Sorry!! Your password is too short
                      </div>
                      <div className="submit">
                        <button className="btn btn-outline-warning" type="submit">LOGIN</button>
                      </div>
                        <p className="forgot-password form-footer">
                          <Link to="/donate-now/forgort-password">Forgot password?</Link>
                        </p>
                        <p className="donate-header-title form-footer">Don't have an account?
                          <strong><Link to="/donate-now/register">&nbsp;Signup</Link></strong>
                        </p>
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
      </React.Fragment>
    );
  }
}

export default Donate;
