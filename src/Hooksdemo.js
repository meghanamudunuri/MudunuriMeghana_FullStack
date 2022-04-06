import React ,{useState}from 'react';
import PropTypes from 'prop-types';

const Hooksdemo = ({heading,value,style,item}) =>{
    
    const [label,useLabel] = useState('This is label');

    
    return (
       
        <h4 style = {style} > {label} {value} {item}</h4>
        
    )
}


export default Hooksdemo;