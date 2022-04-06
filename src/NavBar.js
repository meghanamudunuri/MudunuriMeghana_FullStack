import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
    Routes
  } from "react-router-dom";
  
const NavBar = () =>{
  const activeStyle = {
      color : 'red',
      fontSize : '30px',
       padding:"20px"
  }
  const linkStyle ={
    padding:"20px"
  }
    return (
    <nav>
          
          <NavLink style= {({isActive}) => isActive ? activeStyle : linkStyle} to="/">Home</NavLink>
          <NavLink style= {({isActive}) => isActive ? activeStyle : linkStyle} to="/aboutus">AboutUs</NavLink>
          <NavLink style= {({isActive}) => isActive ? activeStyle : linkStyle} to="/contact">ContactUs</NavLink>
          <NavLink style= {({isActive}) => isActive ? activeStyle : linkStyle} to="/categories">Categories</NavLink>
          <NavLink style= {({isActive}) => isActive ? activeStyle : linkStyle} to = "/viewcart">View Cart</NavLink>
        </nav>
    )
}

export default NavBar;