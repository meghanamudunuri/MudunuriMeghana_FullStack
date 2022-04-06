import React,{useState,useEffect} from 'react';
import Images from './Images';
import Heading from './Heading';
import j1 from './j1.jpg';
import j2 from './j2.jpg';


const imgList={
 "j1":j1,
 "j2":j2
}
const Jewellery = ()=>{
    const [jdata,setjdata] = useState()
    useEffect(()=>{
        fetch(`http://localhost:4000/product/jewellery`)
        .then(response => response.json())
        .then(json => setjdata(json))
    },[])
    const createJewelleryList = (jdata) =>{
        return jdata.map(({name,image},index)=>{
        let valsrc=image;
        for(var x in imgList){
            if(x === image){
                valsrc=imgList[x];
            }
        }
        return(
            <li key={index}>
               <Images src={valsrc} alt="Jewellery" style={{width:"200px",height:"200px"}}/>
                <Heading heading={name}/>
            </li>
        )})
    }


    return(
        <div>
            <Heading heading="Jewellery Products to Check Out"/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {jdata && createJewelleryList(jdata)}
            </ul>
        </div>
    )
}

export default Jewellery;