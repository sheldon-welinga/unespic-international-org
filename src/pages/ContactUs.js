import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import {FaPhoneAlt} from "react-icons/fa";
import {IoIosGlobe, IoIosMailOpen} from "react-icons/io";
import Map from 'react-js-google-maps';
import PropTypes from "prop-types";

// import Client from "../data/contentful";

  //gooogle map marker
  const setMarker = () => {
    let nairobi = { lat:  -1.286389, lng: 36.817223 };
    let marker = new window.google.maps.Marker({
      position: nairobi,
      map: window.gmaps['map1'].gmap
    });
  };

class ContactUs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             subject: '',
             message: ''
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
             message: ''
        })
    }

      onMapLoad() {
        setMarker();
      }
    
      //getData
    //   getData = async ()=>{
    //       let response = Client.getEntries({content_type: "unespicAboutPage", order: "sys.createdAt"})
    //       console.log(response)
    //   }

      //delete them afterwards
    //   componentDidMount(){
    //       this.getData();
    //   }

    render() {
        const {name, subject, email, message} = this.state;

        const mapOptions = {
            zoom: 4,
            center: { lat: -1.286389, lng: 36.817223 }
          }
          
        return (
            <Row className="justify-center">
                <Col lg={11}>
                    <div className="all-pages-min-height">
                    <div className="donate-header contact-header-image">
                        <h1>CONTACT US</h1>
                    </div>
                    <Row className="contact">
                        <Col>
                            
                            <h2 className="contact-header">CONTACT DETAILS</h2>
                            {/* <p className="contact-details"><strong>Our Location</strong></p> */}
                            <p className="contact-details"><IoIosGlobe /><span>45 Amboseli Gardens</span></p>
                            <p className="contact-details"><FaPhoneAlt /><span>+254 723 767 481</span></p>
                            <p className="contact-details"><IoIosMailOpen /><span>info@unespic.org</span></p>
                        </Col>
                    </Row>
                    <Row className="contact">
                        <Col lg={7} md={12}>
                        <form onSubmit={this.handleSubmit} className="volunteer-form">
                            <div>
                                <h2 className="volunteer-title">CONTACT US</h2>
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
                                <textarea name="message" id="message" cols="30" rows="7" placeholder="Message" className="form-control" required value={message} onChange={this.handleChange}></textarea>
                                <div className="invalid-feedback">Please fill out your message</div>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">SEND NOW</button>
                        </form>
                        </Col>
                        <Col lg={5} md={12}>
                        <Map
                            id="map1"
                            apiKey="AIzaSyDhoSUqsXj6vsYSO15lF0UAVccY6tyGoMw"
                            mapOptions={mapOptions}
                            style={{ width: '100%', height: 480 }}
                            onLoad={this.onMapLoad}
                        />
                        </Col>
                    </Row>
                        
                    </div>
                </Col>
            </Row>
        )
    }
}

ContactUs.propsTypes ={
        id: PropTypes.string.isRequired,
        apiKey: PropTypes.string.isRequired,
        mapOptions: PropTypes.object,
        className: PropTypes.string,
        style: PropTypes.object
}

export default ContactUs
