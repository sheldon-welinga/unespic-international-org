import React from 'react';
import {Row, Col} from "react-bootstrap";
import Features from "../components/Features";
import data from "../data/data";


const About = () => {
    let about = data.about.find((item)=> item.single_about === "about-us");

    return (
        <Row className="justify-center">
        <Col lg={11}>
        <div className="all-pages-min-height">
            <Row>
                <Col>
                        <h3 className="features-title heading">{about.title}</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={9} md={8}>
                    {
                        about.description.map((item, index)=><p key={index} className="about">{item}</p>)
                    }
                </Col>
                <Features data={data.about} mainTitle="Features"/>
            </Row>
        </div>
        </Col>
        </Row>
    )
}

export default About
