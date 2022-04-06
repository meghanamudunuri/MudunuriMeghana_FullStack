import React from "react";

const MOCKDATA = ['Apple', 'Banana', 'Orange', 'Kiwi'];

const Lists = (props) =>{
    const {data} = props;
    const createList = (data) =>{
        return data.map((value,index) =>{
            return <li key = {index}> <h2>{value.pname}</h2> <h3>{value.count}</h3> </li>
        })
    }
    return (
        <ul>
            {data && createList(data)}
        </ul>
    )
}
export default Lists;