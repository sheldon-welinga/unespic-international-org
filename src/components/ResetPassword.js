import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";

class ResetPassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             password: '',
             confirmPassword: ''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();

        if (this.state.password.trim().length < 8) {
            document.getElementById("passwordShort").style.display = "block";
            return false;
          } 
        else if (this.state.password !== this.state.confirmPassword) {
            document.getElementById("validate").style.display = "block";
            return false;
          } else {
            // validation checks if the reset passwords match and if length >7
            document.getElementById("passwordShort").style.display = "none";
            document.getElementById("validate").style.display = "none";
      
            console.log(this.state); //To display the text on the console

            this.setState({
                password: '',
                confirmPassword: ''
            })
        }
    }
    
    render() {
        const { password, confirmPassword} = this.state;
        return (
            <Row className="justify-center">
            <Col lg={6} md={8} sm={10}>
                <div className="all-pages-min-height">
                <form onSubmit={this.handleSubmit} className="volunteer-form">
                    <div>
                        <h4>Verify your password</h4> <hr />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="New Password" required value={password} onChange={this.handleChange}/>
                        <div className="password-validity" id="passwordShort">Sorry!! Your password is too short</div>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm New Password" required value={confirmPassword} onChange={this.handleChange}/>
                        <div className="password-validity" id="validate">Sorry!! Passwords do not match</div>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">RESET PASSWORD</button>
                </form>
                </div>
            </Col>
        </Row>
        )
    }
}

export default ResetPassword;