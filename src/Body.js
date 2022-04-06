import React from 'react';
import LinkB from './LinkB';
import Banner from './Banner';
import ImageSlider from './ImageSlider';
import Heading from './Heading';
import Deals from './Deals';

const DealsValue = "Deals of the day";
const SliderValue = "View pics";
const Body = () => {
    return (
        <header className="App-Body">
        
        <LinkB />
        <Banner />
        <Heading heading = {SliderValue}/>
        <ImageSlider />
        <Heading heading = {DealsValue}/>
        <Deals />
       
        </header>
    )
}

export default Body;