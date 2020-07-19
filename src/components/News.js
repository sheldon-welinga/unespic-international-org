import React from 'react';
import {Col, Row} from "react-bootstrap";
import data from "../data/data";
import {BsArrowRight} from "react-icons/bs";


const News = () => {
    let news = [...data.news]
    return (
        <Row className="justify-center">
            <Col lg={11}>
                <div className="all-pages-min-height">
                    {/* <h3 style={{color: '#fb6107', textAlign: "center"}}>STILL UPDATING</h3> */}
                    <Row>
                        <Col className="text-center">
                            <h2 className="features-title">News</h2>
                        </Col>
                    </Row>
                    <Row>
                        {
                        news.map((item)=>(
                            <Col lg={4} md={6} sm={12} key={item.id} >
                                <div className="news-container">
                                    <h5>{item.title}</h5>
                                    <div className="news-image-container">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <img src={item.image} alt={item.title} className="img-others-responsive"/>
                                        </a>
                                    </div>
                                    <p>{item.content} <a href={item.link}>Continue reading <BsArrowRight /></a></p>  
                                </div>
                            </Col>
                            ))
                        }
                    </Row> 
                </div>
            </Col>
        </Row>
    )
}

export default News
