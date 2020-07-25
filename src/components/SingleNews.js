import React from 'react';
import {Row, Col} from "react-bootstrap";
import data from "../data/data";
import {Link} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import {BsArrowLeft} from "react-icons/bs";
// import {StyledHero} from "./Styled";

const SingleNews = (props) => {
    let news = [...data.news];

    const singleNews =props.match.params.single_news;
    let foundNews = news.find(item => item.single_news === singleNews);
    console.log(foundNews);

    if(!foundNews){
        return <ErrorPage />
    }

    const {title, image, description} = foundNews;

    return (
        <Row className="justify-center">
            <Col lg={11}>
                <div className="all-pages-min-height">
                    <Row>
                        <Col lg={9} md={8}>
                            <div>
                                <h2 className="news-title">{title}</h2>
                                <p>Fundraising campaign by <strong><Link to="/">UNESPIC INTERNATIONAL FOUNDATION</Link></strong></p>
                                <Row className="justify-center">
                                    <Col xl={8} lg={9} md={10} sm={11}>
                                        <img src={image} alt={title} className="img-others-responsive"/>
                                    </Col>
                                    <Col xl={4} lg={3} md={2} sm={1} />
                                </Row>
                                
                                <div className="description">
                                    {
                                        description.map((item, index)=><p key={index} className="news-description">{item}</p>)
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4}>
                            <div className="news-section">
                                <h5 className="features-title">News &amp; Events</h5>
                                {
                                    news.map((item)=><p>
                                        <Link to={`/media/news/${item.single_news}`}>{item.title}</Link>
                                    </p>)
                                }
                                <button className="donateBtn donate-now news-donate"><Link to={"/donate-now"} style={{width:100}}>Donate Now</Link></button>
                                <p>Help this ongoing fundraising campaign by making a donation and spreading the word.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Link to={`/media/news`}><BsArrowLeft />Return to News Page</Link>
                        </Col>  
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default SingleNews
