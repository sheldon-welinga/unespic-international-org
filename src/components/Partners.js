import React from 'react';
import {Row, Col} from "react-bootstrap";
import data from "../data/data";

const Partners = () => {
    let partners = [...data.partners];
    return (
        <div className="partners">
            <h3 className="partners-title">Partners</h3>
            <div id="line"></div>
           
            <Row className="justify-center">
            <Col lg={11} className="text-center">
                <p>UNESPIC International Foundation is a charity, nonprofit organisation that works with partners on how to help children, families, and communities.</p>
                </Col>
                <Col lg={12}>
                    <Row className="justify-content-center partners">
                        {
                            partners.map((item)=><Col md={3} xs={12} sm={3} lg={2} xl={2} key={item.id}>
                                <div className="partners-img-container">
                                    <img src={item.partner} alt="" className="img-others-responsive partners-images"/>
                                </div>
                            </Col>)
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Partners
