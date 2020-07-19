import React, { Component } from 'react';
import PayWithPayPal from "./PayWithPayPal";
import paypalImg from "../images/paypal.png";
import data from "../data/data";

 class PaymentForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              guestname: '',
              guestemail: '',
              phone: '',
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

        console.log(this.state);

        this.setState({
            // guestname: '',
            // guestemail: '',
            // phone: '',
            // donationFor: 'Food and Nutrition Security',
            // amount: '',
            isCheckout: true
        })
    }
     
    render() {
        const {guestname, guestemail, phone, donationFor, amount, isCheckout} = this.state;
        if(isCheckout){
            return <PayWithPayPal total={amount} donationFor={donationFor} />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <img src={paypalImg} alt="paypall logo" className="img-others-responsive"/>
                </div>
                <div className="form-group">
                    <input type="name" name="guestname" id="guestname" placeholder="Full Name" className="form-control" value={guestname} onChange={this.handleChange} />
                    <div className="invalid-feedback">Please fill out your name</div>
                </div>
                <div className="form-group">
                    <input type="tel" name="phone" id="phone" placeholder="Phone Number" className="form-control" required value={phone} onChange={this.handleChange} />
                    <div className="invalid-feedback">Please fill out your Phone Number</div>
                </div>
                <div className="form-group">
                    <input type="email" name="guestemail" id="guestemail" placeholder="Email Address" className="form-control" required value={guestemail} onChange={this.handleChange} />
                    <div className="invalid-feedback">Please fill out your email address</div>
                </div>
                <div className="form-group">
                    <label htmlFor="donationFor">Please choose your donation program</label>
                    <select name="donationFor" id="donationFor" value={donationFor} required className="form-control" onChange={this.handleChange} >
                        {
                            data.what_we_do.map((item, index)=><option value={item.title} key={index}>{item.title}</option>)
                        }
                    </select>
                    <div className="invalid-feedback">Please fill out a donation program</div>
                </div>
                <div className="form-group">
                    <input type="number" name="amount" id="amount" placeholder="Donation Amount" className="form-control" required value={amount} onChange={this.handleChange} />
                    <div className="invalid-feedback">Please fill out the amount to donate</div>
                </div>
                <button className="btn btn-outline-warning" type="submit">CHECKOUT</button>
            </form>
        )
    }
}

export default PaymentForm
