import React,{useState} from 'react';
import Heading from './Heading';
import store from './Store/store';
import addtocart from './Actions/addcart';

const Counter = (props) => {
    const [count, setCounter] = useState(0);
    return(
        <>
        
        <button onClick = {() => setCounter(count - 1)}>-</button>
        <h1>{count}</h1>
        <button onClick = {() => setCounter(count + 1)}>+</button><br />
        <button onClick = {() => store.dispatch(addtocart({pname:props.bname,count:count}))}>Add to cart</button>
        </>
    )
}
export default Counter;