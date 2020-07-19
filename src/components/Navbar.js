import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import { Nav} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import  {FaCaretDown} from "react-icons/fa";
import logo from "../images/logo.jpg";

class NavbarPage extends Component{
    //Toggle dropdwon when screen is medium to small
    handleCollapseToggle =(e)=>{
        // console.log(e.target.parentElement);
        let parentDiv =e.target.parentElement;
        let child =[...parentDiv.children];
        child.map((child)=>{
            if(child.classList.contains("navbar-nav")){
                child.classList.toggle("collapse");
            }
            return child; 
        });
    }
    render(){
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand><NavLink to="/"><img src={logo} alt="unespic logo" className="unespic-logo"/></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="unespic-nav"></Navbar.Toggle>
                <Navbar.Collapse id="unespic-navbar">
                    <Nav className="ml-auto">
                        <Nav.Item className="unespic-nav-list"><NavLink to="/">HOME</NavLink></Nav.Item>
                        <Nav.Item className="unespic-nav-list" onClick={this.handleCollapseToggle}><a href="# ">ABOUT &nbsp;<FaCaretDown/></a>
                            <Nav className="ml-auto collapse">
                                <Nav.Item className="unespic-nav-list"><NavLink to="/about/about-us">About Us</NavLink></Nav.Item>
                                <Nav.Item className="unespic-nav-list"><NavLink to="/about/mission-and-vision">Mission and Vision</NavLink></Nav.Item>
                                <Nav.Item className="unespic-nav-list"><NavLink to="/about/become-a-volunteer">Become a Volunteer</NavLink></Nav.Item>
                                <Nav.Item className="unespic-nav-list"><NavLink to="/about/faqs">FAQS</NavLink></Nav.Item>
                            </Nav>
                        </Nav.Item>
                        <Nav.Item className="unespic-nav-list" onClick={this.handleCollapseToggle}><a href="# ">WHAT WE DO &nbsp;<FaCaretDown/></a>
                            <Nav className="ml-auto collapse">
                                <Nav.Item className="unespic-nav-list"><NavLink to="/what-we-do/food-and-nutrition-security">Food and Nutrition Security</NavLink></Nav.Item>
                                <Nav.Item className="unespic-nav-list"><NavLink to="/what-we-do/water-sanitation-and-hygiene">Water, Sanitation &amp; Hygiene</NavLink></Nav.Item>
                                <Nav.Item className="unespic-nav-list"><NavLink to="/what-we-do/women-and-girls-economic-empowerment">Women and Girls Economic Empowerment</NavLink></Nav.Item>
                                <Nav.Item className="unespic-nav-list"><NavLink to="/what-we-do/health">Health</NavLink></Nav.Item>
                                <Nav.Item className="unespic-nav-list"><NavLink to="/what-we-do/emergency-and-humanitarian-assistance">Emergency and Humanitarian Assistance</NavLink></Nav.Item>
                            </Nav>
                        </Nav.Item>
                        
                        <Nav.Item className="unespic-nav-list" onClick={this.handleCollapseToggle}><a href="# ">MEDIA &nbsp;<FaCaretDown/></a> 
                            <Nav className="ml-auto collapse">
                                <Nav.Item className="unespic-nav-list"><NavLink to="/media/gallery">Gallery</NavLink></Nav.Item>
                                <Nav.Item className="unespic-nav-list"><NavLink to="/media/videos">Videos</NavLink></Nav.Item>
                                <Nav.Item className="unespic-nav-list"><NavLink to="/media/news">News</NavLink></Nav.Item>
                            </Nav>
                        </Nav.Item>

                        <Nav.Item className="unespic-nav-list"><NavLink to="/contact-us">CONTACT US</NavLink></Nav.Item>

                        {/* <Nav.Item className="unespic-nav-list"><NavLink to="/contact"></NavLink></Nav.Item> */}
                        <Nav.Item className="unespic-nav-list donate"><NavLink to="/donate-now">DONATE</NavLink></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   
        )
    }
    
}

export default NavbarPage
