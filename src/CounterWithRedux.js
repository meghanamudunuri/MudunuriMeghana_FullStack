import React from "react";
import {useDispatch , useSelector} from 'react-redux';
import increment from './Actions/counter';
import decrementer from './Actions/decrementer';


const CounterWithRedux = () =>{
    const dispatch = useDispatch();
    const state = useSelector((state) =>{
        return{
            count: state.counters.count
        }
    })

    return (
        <>
            <button onClick = {() => dispatch(decrementer(1))}>-</button>
            <span>{state.count}</span>
            <button onClick = {() => dispatch(increment(1))}>+</button>
        </>
    )
}
export default CounterWithRedux;