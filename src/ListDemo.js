import React from "react";

//const MOCKDATA = ['Apple', 'Banana', 'Orange', 'Kiwi'];

const ListDemo = (props) =>{
    const {data} = props;
    const createList = (data) =>{
        return data.map((value,index) =>{
            // return <a href = {`/productdesciption/${value.id}`}><li key = {index}><h2>{value.name}</h2><h2>{value.username}</h2></li></a>
            return <li key = {index}>
                        <h2>{value.name}</h2>
                        <h2>{value.username}</h2>
                    </li>
        })
    }
    return (
        <ul>
            {data && createList(data)}
            
        </ul>
    )
}
export default ListDemo;