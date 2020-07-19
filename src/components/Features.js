import React from 'react';
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaProjectDiagram} from "react-icons/fa";

const Features = ({data, mainTitle}) => {

    return (
        <Col lg={3} md={4}>
            <h4 className="features-title">{mainTitle} <FaProjectDiagram /></h4>
            <ul className="features">
                {
                    data.map((item, index)=>(
                        <li className="features-list" key={index}>
                            {
                                mainTitle === "Features" && <Link to={`/about/${item.single_about}`}>{item.title}</Link>
                            }
                            {
                                mainTitle ==="Our Causes" && <Link to={`/our-causes/${item.single_cause}`}>{item.title}</Link>
                            }
                            {
                                mainTitle === "What We Do" && <Link to={`/what-we-do/${item.single_what_we_do}`}>{item.title}</Link>
                            }
                        </li>
                    ))
                }
            </ul>
        </Col>
    )
}

export default Features
