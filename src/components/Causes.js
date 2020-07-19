import React, {Component} from 'react';
import {Row,Col} from "react-bootstrap";
import data from "../data/data";
import {Link} from "react-router-dom";


class Causes extends Component {
    render(){
    let ourCauses = [...data.our_causes];

    return (
        <Row>
            
            {
                ourCauses.map(item=>(
                    <Col lg={4} md={6} sm={6} xs={12} key={item.id} className="single-cause">
                        <div className="causes-container">
                            <h2 className='sub-title'>{item.title}</h2>
                            <div className="causes-image-container">
                                <img src={item.images[0]} alt={item.title} className="causes-images"/>
                                <button className='donate-now'>
                                    <Link to={`/donate-now`} className="read-link">Donate Now +</Link>
                                </button>
                            </div>
                            <div>{item.excerpt}</div>
                            <button className="read-more"><Link to={`/our-causes/${item.single_cause}`} className="read-link">Read More..</Link></button>
                        </div>
                    </Col>
                ))
            }
        </Row>
    )
    }
}

export default Causes
