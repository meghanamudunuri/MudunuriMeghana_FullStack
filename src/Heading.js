import React ,{useState}from 'react';
import PropTypes from 'prop-types';

const Heading = ({heading,value,style,item}) =>{
    
    return (
         <h4 style = {style} > {heading} {value} {item}</h4>
    )
}

Heading.propTypes = {
    heading : PropTypes.string.isRequired
}
export default Heading;