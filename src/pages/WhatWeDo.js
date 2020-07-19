import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import data from "../data/data";
import Features from "../components/Features";

const WhatWeDo = () => {
    return (
        <Row className='justify-center'>
        <Col lg={11}>
        <div className="all-pages-min-height">
            <Row>
                <Col lg={9} md={8}>
                    <h3>What We Do</h3>
                    <p>Unespic International Foundation has various programmes which include:</p>
                    {
                        data.what_we_do.map((item)=><p key={item.id}><Link to={`/what-we-do/${item.single_what_we_do}`}>{item.title}</Link></p>)
                    }
                </Col>
                <Features data={data.what_we_do} mainTitle="What We Do" />
            </Row>
            <Row>
                <Col>
                    <h1 className="features-title">FAQS</h1>
                    <p>We serve people living in extreme poverty with respect, empathy and dignity regardless of ethnicity, gender, religion or education level, and value our common humanity.</p>  
                </Col>
                <Row>
                        {
                            data.faqs.map((item, index)=><Col key={index} lg={6}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Col>)
                        }
                    </Row>
            </Row>
        </div>
        </Col>
        </Row>
    )
}

export default WhatWeDo;
