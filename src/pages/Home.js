import React from 'react';
import {Row, Col} from "react-bootstrap";

import HomeVideo from "../components/HomeVideo";
import Causes from "../components/Causes";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

const Home = (props) => {
    // console.log(props);
   
    return (
        <React.Fragment>
            
            <HomeVideo />
            <Row className="causes">
                <Col lg={11}>
                    <h1 className="causes-title">Our Causes</h1>
                    <div id="line"></div>
                    <Row>
                        <Causes />
                    </Row>
                    <Row>
                        <Partners />
                    </Row>
                </Col> 
            </Row>
            <Footer />  
        </React.Fragment>
    )
}

export default Home;
