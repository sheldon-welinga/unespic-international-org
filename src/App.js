import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import Media from "./pages/Media";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Header from './components/Header';
import {AppStyles} from "./components/Styled";
import SingleAbout from './components/SingleAbout';
import SingleCause from "./components/SingleCause";
import Donate from "./components/Donate";
import BottomFooter from "./components/BottomFooter";
import Register from './components/Register';
import SingleWhatWeDo from './components/SingleWhatWeDo';
import Videos from "./components/Videos";
import News from "./components/News";
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Dashboard from './components/dashboard';
import ForgotPassword from './components/ForgotPassword';
import ConfirmPayment from './components/ConfirmPayment';

class App extends Component{
 constructor (props){
   super(props)
   this.state = {
     username : ""
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
   } else {
  this.setState({
    loggedIn : false,

  })   
  }
 }

 logout = e => {
   let user = JSON.parse(localStorage.getItem("user"))

   let userId = user.userId
   
   let authToken = user.token

   // pass header in the api call
   var myHeaders = new Headers();
   myHeaders.append("Content-Type", "application/json");
   myHeaders.append("Authorization", "Bearer " + authToken);

   // body content in the api
   var raw = JSON.stringify({ "userId": userId });

   var requestOptions = {
     method: 'POST',
     headers: myHeaders,
     body: raw,
     redirect: 'follow'
   };

   fetch(`https://unespic.herokuapp.com/api/v1/auth/logout`, requestOptions)

     .then(response => {
       
       response.json() // return response in json

       const authmode = localStorage.getItem("authmode");

       localStorage.clear(); // clear local Storage and logout user

       localStorage.setItem('authmode', authmode);
       
       // redirect user to home if logged out
       window.location.href = '/'
     })

     .catch(error => {
       console.log('error', error) // if error during logout handle here

     });

 }

  render(){
  return (
    <AppStyles>
      <Router>
          <div className="App">
              <Header loggedIn = {this.state.loggedIn} username = {this.state.username} logout = {this.logout} handleCollapseToggle = {this.handleCollapseToggle}/>
               <Navbar/>
              <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/our-causes" component={Home} />
                    <Route exact path="/our-causes/:single_cause" component={SingleCause}/>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/about/:single_about" component={SingleAbout} />
                    <Route exact path="/what-we-do" component={WhatWeDo} />
                    <Route exact path="/what-we-do/:single_what_we_do" component={SingleWhatWeDo} />
                    <Route exact path="/media" component={Media} />
                    <Route exact path="/media/gallery" component={Media} />
                    <Route exact path="/media/videos" component={Videos} />
                    <Route exact path="/media/news" component={News} />
                    <Route exact path="/donate-now" component={Donate}/>
                    <Route exact path="/donate-now/register" component={Register} />
                    <Route exact path="/donate-now/confirm-payment" component={ConfirmPayment}/>
                    <Route exact path="/contact-us" component={ContactUs} />
                    <Route exact path="/donate/terms-and-conditions-of-use-and-privacy-policy" component={PrivacyPolicy} />
                    <Route path="/dashboard/donate" component={Dashboard} />
                    <Route path="/donate-now/forgort-password" component={ForgotPassword} />
                    <Route component={ErrorPage} />
              </Switch>
              <BottomFooter />
          </div>
      </Router>
    </AppStyles>
  )
}
}

export default App;
