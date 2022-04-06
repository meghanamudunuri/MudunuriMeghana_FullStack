import React from 'react';
import Button from './Button';
import Logo from './Logo';
import Search from './Search';

import Heading from './Heading';
const isLogged = true;

const HeadingValue = "welcome to the page";

const Header = (props) =>{
    return (  
      
      <header className="App-header">
        <div>
        {isLogged ? <><Heading heading="WELCOME TO FLIPKART"/><button >signout</button></> : <button>signin</button>}
        </div>
        <div>
        <Logo/>
        <Search />
        <Button name="Search"/>
       
       </div>
      </header>
      
   
    )
}
export default Header;