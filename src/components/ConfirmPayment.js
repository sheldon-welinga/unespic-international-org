import React from 'react';
import {Row, Col} from "react-bootstrap";

const ConfirmPayment = (props) => {
    return (
        <Row className="justify-center">
            <Col lg={11}>
                <div  className="all-pages-min-height">
                    <h1>Donation - {props.amount}</h1>
                </div>
            </Col>
        </Row>
    )
}

export default ConfirmPayment
