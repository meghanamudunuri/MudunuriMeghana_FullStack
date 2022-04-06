import React from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import ContactUs from "./ContactUs";
import Categories from "./Categories";
import Size from "./Size";
import Color from "./Color";
import ViewCart from "./ViewCart";
import Fashion from './Fashion';
import Mobile from './Mobile';
import Jewellery from './Jewellery'

import {

    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";


const isLogged = true;
const Navigation = () => {
    return (
        <>
       
    <Router>
        <NavBar />
        <div className="App">          
          <Routes>
           <Route path="/" element={<Home/>}/>
            <Route path = "aboutus" element  = {<AboutUs />}/>
            <Route path = "contact"  element= {<ContactUs />}/>
            <Route path = "categories"  element= {<Categories />}>

           
              <Route path = "size" element = {<Size />}/>
              <Route path = "color" element = {<Color />}/>  
            </Route>

            <Route path = "fashion" element={<Fashion />} />
            <Route path = "mobile" element={<Mobile />} />
            <Route path = "jewellery" element={<Jewellery/>} />

            <Route path = "viewcart"  element= {<ViewCart />}></Route>
          </Routes>
        </div>
      </Router>
     
      </>
    )
}

export default Navigation;