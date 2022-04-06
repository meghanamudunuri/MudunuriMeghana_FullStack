import React,{useState,useEffect} from 'react';

import Images from './Images';
import Heading from './Heading';
import d1 from './d1.jpg';
import d2 from './d2.jpg';


const imgList={
 "d1":d1,
 "d2":d2
}
const Fashion = ()=>{
    const [fdata,setfData] = useState()
    useEffect(()=>{
        fetch(`http://localhost:4000/product/fashion`)
        .then(response => response.json())
        .then(json => setfData(json))
    },[])
    const createFashionList = (fdata) =>{
        return fdata.map(({name,image},index)=>{
        let valsrc=image;
        for(var x in imgList){
            if(x === image){
                valsrc=imgList[x];
            }
        }
        return(
            <li key={index}>
               <Images src={valsrc} alt="fashion" style={{width:"200px",height:"200px"}}/>
                <Heading heading={name}/>
            </li>
        )})
    }


    return(
        <div>
            <Heading heading="Fashion Products to Check Out"/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {fdata && createFashionList(fdata)}
            </ul>
        </div>
    )
}

export default Fashion;