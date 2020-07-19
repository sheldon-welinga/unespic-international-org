import React from 'react';
import {Row, Col} from "react-bootstrap";
import Features from "./Features";
import data from "../data/data";
import {StyledHero} from "./Styled";

const SingleWhatWeDo = (props) => {
    let singleWhatWeDo = props.match.params.single_what_we_do;
    let foundWhatWeDo =data.what_we_do.find((item)=>item.single_what_we_do === singleWhatWeDo);

    const {title, description, single_what_we_do,image, extras} = foundWhatWeDo;
    // console.log(foundWhatWeDo)
    // console.log(extras);

    return (
        <Row className="justify-center">
        <Col lg={11}>
            <div className="all-pages-min-height">
            <Row>
                <Col lg={9} md={8}>
                   <StyledHero image={image} />
                   <Row>
                        <h5 className="orange what-we-do">{title}</h5>
                   </Row>
                   <Row>
                        {
                            description.map((item, index)=><p key={index}>{item}</p>)
                        }
                        {
                            single_what_we_do==="food-and-nutrition-security" && <ul>
                                <li>Adaptation to Climate Change</li>
                                <li>Agricultural Values Chains</li>
                                <li>Water, Sanitation and Hygiene</li>
                            </ul>
                        }
                        {
                            single_what_we_do ==="water-sanitation-and-hygiene" && <div>
                                <h5 className="orange">Our current projects</h5>
                                <p>Safe Water Systems and Hygiene</p>
                            </div>
                        }
                        {
                            single_what_we_do === "health" && <div>
                                <Row>
                                    <Col>
                                        <img src={extras[0]} alt=""/>
                                    </Col>
                                    <Col />
                                </Row>
                                </div>
                        }
                        {
                            single_what_we_do === "emergency-and-humanitarian-assistance" && <section>
                                <Row>
                                    <Col>
                                        <img src={extras[0]} alt="" className="img-others-responsive"/>
                                    </Col>
                                    <Col>
                                        <img src={extras[1]} alt="" className="img-others-responsive"/>
                                    </Col>
                                    
                                </Row>
                                <br/>
                                <h5 className="orange">Gender and Community Development</h5>
                                <p>The Gender and Community Development Sector in Unespic plays a leading role in prevention and response to Gender Based Violence (GBV). The sector works with law enforcers and the community in providing protectio. GBV survivors are also assisted to access other emergency support services such as health options to protect them from possible contraction of HIV/AIDS, pregnancy or Sexually Transmitted Infections (STIs) in cases of rape.</p>
                            </section>
                        }
                    </Row>
                </Col>
                <Features  data={data.what_we_do} mainTitle="What We Do"/>
                </Row>
            </div>
        </Col>
        </Row>
    )
}

export default SingleWhatWeDo;
