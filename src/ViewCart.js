import React from 'react';
import { useSelector } from 'react-redux';
import Lists from './Lists';

const ViewCart = () =>{

    const cart = useSelector((state) => state.carts.cart)

    return (
         <Lists data = {cart} />

    )
}

export default ViewCart;