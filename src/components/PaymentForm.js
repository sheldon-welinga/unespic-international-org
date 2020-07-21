import React, { Component } from 'react';
import PayWithPayPal from "./PayWithPayPal";
import paypalImg from "../images/paypal.png";
import data from "../data/data";
import {withRouter} from "react-router-dom";
// import {Col, Row} from "react-bootstrap";
// import ConfirmPayment from './ConfirmPayment';

 class PaymentForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              guestName: '',
              guestEmail: '',
              donationFor: 'Food and Nutrition Security',
              amount: '',
              isCheckout: false
         }
     }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();

        this.setState({
            isCheckout: true
        })
        // console.log(this.state);
        
    }
     
    render() {
        const {guestName, guestEmail, donationFor, amount, isCheckout} = this.state;
        if(isCheckout){
            return <PayWithPayPal total={amount} donationFor={donationFor} />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="paypal-img-container">
                    <img src={paypalImg} alt="paypall logo" className="paypal-image"/>
                </div>
                <hr/>
                <div className="form-row">
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input type="text" name="guestName" id="guestName" placeholder="Full Name" className="form-control" value={guestName} onChange={this.handleChange} />
                        <div className="invalid-feedback">Please fill out your full name</div>                    
                    </div>
                    <div className="form-group col-md-6 col-sm-6 col-xs-12">
                        <input type="email" name="guestEmail" id="guestEmail" placeholder="Email Address" className="form-control" required value={guestEmail} onChange={this.handleChange} />
                        <div className="invalid-feedback">Please fill out your email address</div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="donationFor">Choose donation programme</label>
                    <select name="donationFor" id="donationFor" value={donationFor} required className="form-control" onChange={this.handleChange} >
                        {
                            data.what_we_do.map((item, index)=><option value={item.title} key={index}>{item.title}</option>)
                        }
                    </select>
                    <div className="invalid-feedback">Please fill out a donation program</div>
                </div>
                <div className="form-group row justify-center">
                    <label htmlFor="" className="col-lg-3 col-md-2 col-sm-2 col-xs-2 col-form-label">$USD</label>
                    <div className="col-lg-5 col-md-6  col-sm-6 col-xs-6">
                        <input type="number" name="amount" id="amount" placeholder="Amount" className="form-control" required value={amount} onChange={this.handleChange} />
                        <div className="invalid-feedback">Please fill out the amount</div>
                    </div> 
                </div>
                <div className="submit">
                    <button className="btn btn-outline-warning" type="submit">CHECKOUT</button>
                </div> 
            </form>
        )
    }
}

export default withRouter(PaymentForm)
