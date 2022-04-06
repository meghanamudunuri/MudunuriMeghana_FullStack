import React from 'react';
import Images from './Images';
import img1 from './img1.jpeg'

const banimg = {
    width : "100%" ,
    height : "30vw"
}
 const bantext = {
     fontSize : "14px",
     color : "red"
 }

const Banner = () => {
    return (
        // <div class = "App-Banner">
            <div>
            <Images src = {img1} style = {banimg}/>
        </div>
    )
}
export default Banner;