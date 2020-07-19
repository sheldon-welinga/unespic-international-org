import React from 'react';
import {Row, Col} from "react-bootstrap";

import data from "../data/data";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Features from "./Features";
import {StyledHero} from "../components/Styled";
import BecomeAVolunteer from './BecomeAVolunteer';
import News from "./News";
import VisionFocusAndPrinciples from "./VisionFocusAndPrinciples";

const SingleAbout = (props) => {
    let singleAbout = props.match.params.single_about;
    let foundAboutPage = data.about.find((item)=>item.single_about === singleAbout);

    if(!foundAboutPage){
        return <ErrorPage />
    }

    if(foundAboutPage.single_about === "about-us"){
        return <About />
    }
    
    const {image, title, single_about, description} = foundAboutPage;

    return (
        <Row className="justify-center">
        <Col lg={11}>
        <div className="all-pages-min-height">
            <Row>
                <Col>
                    <StyledHero image={image}>
                    <h3 className="styled-about-title">About | {title}</h3>
                    </StyledHero>
                    <h3 className="features-title heading">{title}</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={9} md={8}>
                    {
                        description.map((item, index)=><p key={index} className="about">{item}</p>)
                    }
                    {
                        single_about === "become-a-volunteer" && <BecomeAVolunteer />
                    }
                    {
                        single_about === "news" && <News />
                    }
                    {
                        single_about ==="mission-and-vision" && <VisionFocusAndPrinciples />
                    }
                    {
                        single_about ==="faqs" && <Row>
                            {data.faqs.map((item, index)=><Col key={index} lg={6}>
                                    <h3 className="orange faq-heading">{item.title}</h3>
                                    <p>{item.description}</p>
                                </Col>)}
                        </Row>
                    }
                </Col>
                <Features data={data.about} mainTitle="Features"/>
            </Row>
        </div>
        </Col>
        </Row>
    )
}

export default SingleAbout;
