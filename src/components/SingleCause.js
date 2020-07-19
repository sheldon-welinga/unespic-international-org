import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Row, Col} from "react-bootstrap";


import data from "../data/data";
import {StyledHero} from "./Styled";
import ErrorPage from "../pages/ErrorPage";
import Features from './Features';
import Comments from './Comments';

class SingleCause extends Component {
    render() {
        let ourCauses = [...data.our_causes];

        let singleCause = this.props.match.params.single_cause;
        let foundCause= ourCauses.find((item)=> item.single_cause ===singleCause);

        if(!foundCause){
            return <ErrorPage /> 
        }

        const {images, title, description,extras, single_cause} = foundCause;
        // console.log(foundCause)
        
        return (
            <Row className="justify-center">
            <Col lg={11}>
            <div  className="all-pages-min-height">
                <StyledHero image={images[0]}>
                <h3 className="causes-title">Causes | {title}</h3>
                <button className="read-more"><Link to={"/"} className="read-link">RETURN HOME</Link></button>
                </StyledHero>
                <Row>
                    <Col>
                        <Row>
                            <h5 className="orange">{title}</h5>
                        </Row>
                        <Row>
                            {
                                description.map((item, index)=><p key={index}>{item}</p>)
                            }
                        </Row>
                        <Row>
                            <Col>
                            {
                                extras.map((item, index)=> <div key={index} className="causes-list">
                                    <p>{item}</p>
                                </div>)
                            }
                            </Col>
                        </Row>
                        <Row>
                            <button className='donateBtn donate-now'>
                                <Link to={`/donate-now`} >Donate Now +</Link>
                            </button>
                        </Row>
                        <Row>
                            {
                                images.length>0?<Col lg={6}>
                                    <img src={images[0]} alt={title} className="img-others-responsive"/>
                                </Col>: null
                            }
                        </Row>
                    </Col>
                    <Features data={data.our_causes} mainTitle="Our Causes"/>
                </Row>
                <Row>
                    <Col lg={5} md={5}>
                        <Comments page={single_cause} />
                    </Col>
                </Row>
            </div>
            </Col>
            </Row>
        )
    }
}

export default SingleCause;


