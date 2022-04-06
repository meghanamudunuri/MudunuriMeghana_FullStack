import React from 'react';
import Images from './Images';
import Heading from './Heading';
import Counter from './Counter';
const styleimages = {
    width: "15vw" , 
    height : "15vw"
}
const textstyle = {
    fontSize : "15px",
    color : "blue"
}
const MOCKDATA = [{'pic' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJXp4Tk7fAijvrx3gJ8wau3OiB9geY-3A6Q&usqp=CAU",'price' : 'MRP : 120000','picname' : 'IPhone13'},
 {'pic' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROske6OzKOuvgJ6ayIYxF_jNzNPpL6v-x7sdO6S2-9VSDMAzRQRd3nUgLlvIGfEoEPdK0&usqp=CAU",'price' : 'MRP : 50000','picname' : 'OnePlus9'},
 {'pic' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-1bW87tAiZpXpZDq_bl_bQcBrmUkAiJMQbT23X_8-UjSspWGS4UbtUhjZbnjFlis-Ys&usqp=CAU",'price' : 'MRP : 600','picname' : 'Bangles'}
];

const Deals = () =>{
    const createList = () =>{
        return MOCKDATA.map((value,index) =>{
            return <li key = {index}>
                    <div>
                        <img src={value.pic} /><br />
                        <Heading heading = {value.price} style = {textstyle} /> 
                        <Heading heading = {value.picname} />
                        <Counter bname= {value.picname}/><br />
                       
                    </div>
                 
                </li>
        })
    }
    return (
        <nav class = "deals-nav" >
            <ul>
                {createList(MOCKDATA)}
            </ul>
        </nav>
    )
}
export default Deals;