import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import paypal from "paypal-rest-sdk";

paypal.configure({
  mode: 'sandbox', // Sandbox or live
  client_id: 'AWqzIvbbqt-UUoDqyn27eNFCXMzc0A59qzv2E26_09fb72o-Xm7YfNjXrrIMqOu0Rvg-W1ev_6SdZZWZ', //set the client_id from paypall
  client_secret: 'EJWp-aRSsu2Nf5jR7jmevTHzHjFnF6eoc9e-AUvX3NQNn3dA83YMeDco-I0qfq6bux6WUqXlsVV4Cq_l'}); //set the client_secret from paypall

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
                <h6>Thank you for making your donation</h6>
            </div>
        }
            
        if(error){
            return <div className="error-donation">
                <h3>An error  while processing your payment.</h3> 
                <h6>Please try again</h6>
            </div>
        }
        
        return (
            <div>
                <ListGroup>
                    <ListGroupItem >
                        <h4>{donationFor}</h4>
                        <div>Donation Amount - ${total}</div>
                        <div ref={payPalRef}></div>
                    </ListGroupItem>   
             </ListGroup>
            </div>
        )
    }
}

export default withRouter(PayWithPayPal);

//Using Hooks in Functional Components

// import React, {useEffect, useState, useRef}  from 'react';
// import {ListGroup, ListGroupItem} from "react-bootstrap";

// const PayWithPayPal =(props)=>{
//     const {total, donationFor} = props;
//     const {paid, setPaid} = useState(false);
//     const {error, setError} = useState(null);
//     const payPalRef = useRef();

//    useEffect(()=>{
//     window.paypal.Buttons({
//         intent: 'capture',
//         createOrder: (data, actions)=>{
//             return actions.order.create({
//                 purchase_units: [{
//                     description: "Donation checkout",
//                     amount: {
//                         currency_code: "USD",
//                         value:total
//                     }
//                 }]
//             });
//         },
//         onApprove: async (data, actions)=>{
//             const order = await actions.order.capture();
//             setPaid(true);
//             console.log(order);
//         },
//         onError: err =>{
//             setError(err);
//             console.err(err);
//         }

//     }).render(payPalRef.current)

//    })

//    if(paid){
//     return <div>Thank you for making your donation</div>
//     }

//     if(error){
//         return <div>Error processing your payment. Please try again</div>
//     }

//     return (
//         <div>
//             <ListGroup>
//                 <ListGroupItem >{donationFor}</ListGroupItem>
//                 <div>Donation Amount - {total}</div>
//                 <div ref={payPalRef}></div>
//             </ListGroup>
//         </div>
//         )
//     }

// export default PayWithPayPal
