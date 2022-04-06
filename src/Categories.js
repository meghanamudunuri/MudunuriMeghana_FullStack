import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    Outlet
  } from "react-router-dom";
  
const Categories = () => {
    return <>
        <h1>Categories</h1>
        <nav>
            <Link to = "size">Size</Link>
            <Link to = "color">Color</Link>
        </nav>
        <Outlet />
    </>
}
export default Categories;