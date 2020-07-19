import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './DashboardPaymentForm';

 class Dashboard extends Component{
 constructor (props){
     super(props)
     this.state = {
       loggedIn: false,
       username: ''
     }
 }

 UNSAFE_componentWillMount (){
    //  get all userdetails
    const userData = JSON.parse(localStorage.getItem("user"))

  if(userData) {
      this.setState({
        loggedIn : true,
        username : userData.user.fullname
      })
    } 
 }
  render(){
    // console.log(this.state.loggedIn)

    if(this.state.loggedIn === false ){
      return <Redirect to={'/'} />
    }
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
                            <Payment/>
                      </Col>
                  </Row>
                </div>
              </Col>
          </Row>
      )
  }
}

export default Dashboard;