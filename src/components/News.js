import React from 'react';
import {Col, Row} from "react-bootstrap";
import data from "../data/data";
import {Link} from "react-router-dom";
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
                                        <Link to ={`/media/news/${item.single_news}`}>
                                            <img src={item.image} alt={item.title} className="img-others-responsive"/>
                                        </Link>
                                    </div>
                                    <p>{item.content} <Link to={`/media/news/${item.single_news}`}>Continue reading <BsArrowRight /></Link></p>  
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
