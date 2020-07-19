import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link} from "react-router-dom";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
      .catch((err) => err);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Row className="justify-center">
        <Col lg={11}>
          <div className="donate-header">
            <h1>Donate Now</h1>
          </div>
          <div className="all-pages-min-height">
            <Row className="justify-content-center">
              <Col xs={12} lg={5} md={6}>
                <div>
                  <p className="donate-header-title">
                    Do not have an account? {" "}
                    <strong>
                      <Link to="/donate-now">Register</Link> 
                    </strong>
                  </p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h3>LogIn to Donate</h3>
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
                  <button className="btn btn-outline-warning" type="submit">
                    Log In
                  </button>
                  <div>
                    <p className="forgot-password">
                      <Link to="/donate-now/forgort-password">
                        Forgot your password?
                      </Link>
                    </p>
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
}

export default LogIn;
