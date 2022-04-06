import React from 'react';
import PropTypes from 'prop-types';

const Images = ({className,src,alt,style}) => {
    return (
        <img className={className} src={src} alt={alt} style={style}/>
    )
}

export default Images;