import React, {Component} from 'react';
import {Row,Col} from "react-bootstrap";
import data from "../data/data";
import {Link} from "react-router-dom";

class Programmes extends Component {
    render(){
    // let programmes =[...data.programmes];
    let whatWeDo = [...data.what_we_do];

    return (
        <Row>
            {
                whatWeDo.map(item=>(
                    <Col lg={4} md={6} sm={6} xs={12} key={item.id}>
                        <div>
                            <h2 className='sub-title'>{item.title}</h2>
                            <div className="programmes-image-container">
                                <img src={item.images[0]} alt={item.title} className="programme-images"/>
                                <button className='donate-now'>
                                    <Link to={`/donate/${item.single_what_we_do}`} className="read-link">Donate Now +</Link>
                                </button>
                            </div>
                            
                            <div>{item.partialDescription}</div>
                            <button className="read-more"><Link to={`/what-we-do/${item.single_what_we_do}`} className="read-link">Read More..</Link></button>
                        </div>
                    </Col>
                ))
            }
        </Row>
    )
    }
}

export default Programmes
