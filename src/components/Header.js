import React from 'react';
import {Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaPhoneAlt, FaRegUser, FaUserCircle} from "react-icons/fa";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {MdLockOpen} from "react-icons/md";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";

const Header = (props) => {
     //  get all userdetails
   const userData = JSON.parse(localStorage.getItem("user"))
   
    return (
        <div className='header' >
            <p className="contact"><FaPhoneAlt/> <span>+254 723 767 481 </span></p>
            <Row>
               <div className="loginandsignup">
                   {userData || props.loggedIn ? <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="nav-link loggedInUserDropDown" caret>
                            <FaUserCircle className="loggedUserIcon"/> {userData.user.fullname || props.username}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem >
                                <Link to="/dashboard/donate" className="myprofile"> <FaHandHoldingUsd className="profileIcon"/> Donations</Link>
                            </DropdownItem>
                            <DropdownItem onClick= {props.logout} ><FaSignOutAlt className="profileIcon"/> Logout</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    :
                   <div>
                    <span className="login"><Link to="/donate-now/login"><MdLockOpen /> LOGIN</Link></span>
                    <span><Link to="/donate-now"><FaRegUser /> REGISTER</Link></span>
                   </div>}
               </div>
            </Row>
        </div>
    )
}

export default Header;