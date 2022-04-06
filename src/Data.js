import React , {useEffect, useState} from "react"; 
import ListDemo from "./ListDemo";

const Data = () => {
    const [data ,setData] = useState();
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))

    },[])
    return(
       <ListDemo data = {data} /> 
    )
}

export default Data;