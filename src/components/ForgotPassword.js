import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";

class ForgotPassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.setState({
             email: ''
        })
    }
    
    render() {
        const { email} = this.state;
        return (
            <Row className="justify-center">
            <Col lg={6} md={8} sm={10}>
                <div className="all-pages-min-height">
                <form onSubmit={this.handleSubmit} className="volunteer-form">
                    <div>
                        <h4>Reset Your Password</h4> <hr />
                        <p>Forgot your account password? Enter your email address to get reset password.</p>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Email" required value={email} onChange={this.handleChange}/>
                        <div className="invalid-feedback">Please fill out your email address</div>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">CONTINUE</button>
                </form>
                </div>
            </Col>
        </Row>
        )
    }
}

export default ForgotPassword;
