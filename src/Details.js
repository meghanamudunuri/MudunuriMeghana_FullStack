import React from "react";
import Heading from "./Heading";

const Details = ({fname,mail,phone,location}) =>{
    return(
    <>
    <Heading heading="FullName:"/>
    <span>{fname}</span>
    <Heading heading="Email:" />
    <span>{mail}</span>
    <Heading heading="Phone:"/>
    <span>{phone}</span>
    <Heading heading="Location:" />
    <span>{location}</span>
    </>
    )
}

export default Details;