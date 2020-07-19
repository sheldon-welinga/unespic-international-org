import React from 'react';
import {Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaFacebook,FaLinkedin, FaYoutube, FaPhoneAlt} from "react-icons/fa";
import {IoIosGlobe, IoIosMailOpen} from "react-icons/io";

const Footer = () => {
    return (
        <div className="footer">
        <Row>
            <Col lg={4} md={6}>
                <h3>Our Impact</h3>
                <p className='impact'><Link to="/">Causes</Link></p>
                <p className='impact'><Link to="/what-we-do">What We Do</Link></p>
            </Col>
            <Col lg={4} md={6}>
                <div>
                    <h3>Our Social Links</h3>
                    <p className='social'>
                        <a href="https://www.facebook.com/unespic/" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-facebook"/><span>Facebook</span></a>
                    </p>
                    <p className='social'>
                        <a href="https://ke.linkedin.com/in/unespic-international-1415441b0" target="_blank" rel="noopener noreferrer"><FaLinkedin  className="social-linkedin"/><span>LinkedIn</span></a>
                    </p>
                    <p className='social'>
                        <a href="https://www.youtube.com/channel/UCJ-XdKGvf6w0e7YoUivTshA" target="_blank" rel="noopener noreferrer"><FaYoutube className="social-youtube"/><span>Youtube</span></a>
                    </p>
                </div>
            </Col>
            <Col lg={4} md={6}>
                <h3>Contact Us</h3>
                <p className="contact-details"><IoIosGlobe /><span>45 Amboseli Gardens</span></p>
                <p className="contact-details"><FaPhoneAlt /><span>+254 723 767 481</span></p>
                <p className="contact-details"><IoIosMailOpen /><span>info@unespic.org</span></p>
            </Col>
        </Row>
        </div>
    )
}

export default Footer;
