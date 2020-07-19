import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import CountUp from "react-countup";


import data from "../data/data";
import {StyledHero} from "./Styled";
import ErrorPage from "../pages/ErrorPage";
import Features from './Features';
import Comments from './Comments';

class SingleWhatWeDoProgramme extends Component {
    render() {
        let whatWeDo = [...data.what_we_do];

        let singleProgramme = this.props.match.params.single_what_we_do;
        let foundProgramme = whatWeDo.find((item)=> item.single_what_we_do ===singleProgramme);

        if(!foundProgramme){
            return <ErrorPage /> 
        }

        const {images, title, description,extras, single_what_we_do} = foundProgramme;
        // console.log(foundProgramme)

        // Javascript to animate
        let animateData = [
                { end: 200, duration: 10, title: "Project 1"},
                { end: 300, duration: 5, title: "Project 2"},
                { end: 500, duration: 30, title: "Project 3"},
                { end: 50, duration: 10, title: "Project 4"}
        ];
        return (
            
            <div  className="all-pages-min-height">
                <StyledHero image={foundProgramme.images[0]}>
                <h3>Programme | {foundProgramme.title}</h3>
                <button className="read-more"><Link to={"/"} className="read-link">RETURN HOME</Link></button>
                </StyledHero>
                <Row>
                    <Col>
                        <Row>
                            <h5>{title}</h5>
                        </Row>
                        <Row>
                            {
                                description.map((item, index)=><p key={index}>{item}</p>)
                            }
                        </Row>
                        {
                            images.length>0?<Row>
                                <Col lg={6}>
                                    <img src={images[1]} alt={title} className="img-responsive img-others-responsive"/>
                                </Col>
                                
                            </Row> : null
                        }
                        <Row>
                            <Col>
                            {
                                extras.map((item, index)=> <div key={index} className="programme-list">
                                    <p>{item}</p>
                                </div>)
                            }
                            </Col>
                        </Row>
                        <Row>
                            <button className='donateBtn donate-now'>
                                <Link to={`/donate/${single_what_we_do}`}>Donate Now +</Link>
                            </button>
                        </Row>
                    </Col>
                    <Features data={data.what_we_do} mainTitle="What We Do" />
                </Row>
                <Row>
                    <Col>
                        <h3 className="features-title">Our Current Projects</h3>
                    </Col>
                </Row>
                <Row>
                    {
                        animateData.map((item, index)=> <Col key={index} lg={3} md={4} sm={6}>
                            <h3>{item.title}</h3>
                            <h1><CountUp end={item.end} duration={item.duration} /></h1>
                        </Col>)
                    }
                </Row>
                <Row>
                    <Col lg={5}>
                        <Comments page={single_what_we_do} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SingleWhatWeDoProgramme;


