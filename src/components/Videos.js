import React from 'react';
import {Row, Col} from "react-bootstrap";
import data from "../data/data";
// import video from "../videos/video1.mp4";

const Videos =() =>{
        let videos = [...data.videos];
        return(
            <Row className="justify-center">
                <Col lg={11}>
                    <div  className="all-pages-min-height">
                        <Row>
                            <Col className="text-center">
                                <h2 className="features-title">Videos</h2>
                            </Col>
                        </Row>
                        <Row>
                            {
                                videos.map((item)=>(
                                    <Col lg={4} md={6} sm={12} key={item.id}>
                                        <h5>{item.title}</h5>
                                        <video width="100%" poster={item.poster} controls>
                                            <source src={item.video} type="video/mp4" />
                                            <source src={item.video_w} type="video/webm" />
                                            Your browser does not support this video
                                        </video>
                                    </Col>
                                ))
                            }
                        </Row> 
                    </div>
                </Col>
            </Row>
        )
}

export default Videos
