import React from 'react';
import {Row, Col} from "react-bootstrap";
import data from "../data/data";
import {ImageGallery} from "../components/Styled";

const Media = () => {
    let gallery = [...data.gallery];
    return (
        <Row className="justify-center">
        <Col lg={11}>
            <div className="all-pages-min-height">
                <Row>
                    <Col className="text-center">
                        <h2 className="features-title ">Gallery</h2>
                    </Col>
                </Row>
                <div className="gallery">
                {
                    gallery.map(item=> <ImageGallery image={item.image} className="gallery-image-container"/>)
                }
                  
                </div>
            </div>
        </Col>
        </Row>
    )
}

export default Media
