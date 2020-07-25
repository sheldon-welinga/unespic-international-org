import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {withRouter} from "react-router-dom";

class PayWithPayPal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             paid: false,
             error: null,
             payPalRef: React.createRef()
        }
    }
    
    componentDidMount(){
        window.paypal.Buttons({
            intent: 'capture',
            createOrder: (data, actions)=>{
                return actions.order.create({
                    purchase_units: [{
                        description: "Donation checkout",
                        amount: {
                            currency: 'USD',
                            value: this.props.total
                        }
                    }]
                });
            },
            onApprove: async (data, actions)=>{
                const order = await actions.order.capture();
                this.setState({
                    ...this.state,
                    paid: true
                });
                // console.log(order)
                setTimeout(()=>{
                    this.props.history.push("/");
                }, 3000);
                return order;
            },
            onSuccess: (payment)=>{
                payment = this.state.total;
                return  <div>Your donation of {payment} was successfully received</div>
            },
            onError: (err)=>{
                this.setState({
                    ...this.state,
                    error: err
                });
                // console.error(err);
                return err;
            }
        }).render(this.state.payPalRef.current);

    }

    render() {
        const {total, donationFor} = this.props;
        const {paid, error, payPalRef} = this.state;

        if(paid){
            return <div className="success-donation">
                <h3>Your donation for {donationFor} was received sucessfully.</h3>
                <h6>Thank you for donating with us/</h6>
            </div>
        }
            
        if(error){
            return <div className="error-donation">
                <h3>An error occurred while processing your payment.</h3> 
                <h6>Please try again</h6>
            </div>
        }
        
        return (
            <div>
                <ListGroup>
                    <ListGroupItem >
                        <h5>{donationFor}</h5>
                        <div>Donation Amount - ${total}</div>
                        <div ref={payPalRef}></div>
                    </ListGroupItem>   
             </ListGroup>
            </div>
        )
    }
}

export default withRouter(PayWithPayPal);
