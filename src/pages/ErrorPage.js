import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col} from "react-bootstrap";

const ErrorPage = () => {
    return (
        <Row className="justify-center">
        <Col lg={11}>
        <div className="error-page all-pages-min-height">
            <div className="error">
                <h1>Error 404</h1>
                <p>Page not found!!</p>
                <button className="error-btn"><Link to="/" className="error-link">Return Home</Link></button>
            </div>
        </div>
        </Col>
        </Row>
    )
}

export default ErrorPage
