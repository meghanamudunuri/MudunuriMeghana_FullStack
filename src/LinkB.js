import React from 'react';
import Images from './Images';
import mobile from './mobile.png';
import Heading from './Heading';
import { NavLink } from 'react-router-dom';

const imgstyle={
    width: "5vw" , 
    height : "5vw"
}

const textstyle = {
    fontSize : "15px",
    color : "white"
}

const MOCKDATA = [{'link': '/fashion', 'pic': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-xEIhsttGXgW7q-IuwLPkmRhML10M8_R-4le8VMupZS3cIVTA1_z03hSxTS-pFjZxD4&usqp=CAU"  ,'name' : 'Fashion'},
{'link': '/mobile','pic': "https://upload.wikimedia.org/wikipedia/commons/3/3c/OnePlus_6T.jpg",'name' : 'Mobile'},
{'link': '/jewellery','pic': "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCl6jAMy24XFPpZARutSAnrE89wKxQnKuX9A&usqp=CAU",'name' : 'Jewellery'},

];

const LinkB = () =>{
    const createList = () =>{
        return MOCKDATA.map((value,index) =>{
            
            return  <li key = {index}>
                        <NavLink className = "app-name" to= {value.link}>
                           
                                <Images src={value.pic} style = {imgstyle}/><br/>
                                <Heading heading = {value.name} style = {textstyle}/>
                            
                        </NavLink>
                    </li>
        })
    }
    return (
        <nav class = "App-nav">
        <ul >
            {createList(MOCKDATA)}
        </ul>
        </nav>
    )
}
export default LinkB;