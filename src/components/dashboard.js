import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './PaymentForm';

export default class Dashboard extends Component{
 constructor (props){
     super(props)
     this.state = {

     }
 }

 componentWillMount (){
 }
  render(){
      return(
          <Row className="justify-content-center">
            <Col xs={12} className="donate-header">
            <h1>Donate Now</h1>
          </Col>
              <Col xs={12} md={8} lg={6} xl={6}>
              <div className="all-pages-min-height">
                  <Row className="justify-content-center">
                      <Col xs={12} sm ={3} md={3} lg={3} xl={5} className="Sidebar"></Col>
                      <Col xs={12}  sm={9} md={9} lg={9} xl={7} className="dashboardHeader">
                        {/* <Row className="justify-content-center">  */}
                            <Route exact path="/dashboard/donate" component={Payment}/>
                        {/* </Row> */}
                      </Col>
                  </Row>
                </div>
              </Col>
          </Row>
      )
  }
}