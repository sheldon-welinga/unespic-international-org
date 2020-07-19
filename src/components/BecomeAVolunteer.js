import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class BecomeAVolunteer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             subject: '',
             message: '',
             hear: 'Word of Mouth'
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
             name: '',
             email: '',
             subject: '',
             message: '',
             hear: 'Word of Mouth'
        })
    }
    
    render() {
        const {name, subject, email, message, hear} = this.state;
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
                <div>
                    <h4 className="volunteer-title">SUBSCRIBE</h4>
                </div>
                <div className="form-group">
                    <input type="text" id="name" name="name" placeholder="Full Name" className="form-control" required value={name} onChange={this.handleChange}/>
                    <div className="invalid-feedback">Please fill out your full name</div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email" required value={email} onChange={this.handleChange}/>
                    <div className="invalid-feedback">Please fill out your email address</div>
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
                    <textarea name="message" id="message" cols="30" rows="7" placeholder="Message" className="form-control" required value={message} onChange={this.handleChange}></textarea>
                    <div className="invalid-feedback">Please fill out your message</div>
                </div>
                <button type="submit" className="btn btn-outline-primary">SEND NOW</button>
            </form>
            </Col>
            </Row>
            </React.Fragment>
        )
    }
}



export default BecomeAVolunteer
