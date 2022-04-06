import React,{useState,useEffect} from 'react';
import Images from './Images';
import Heading from './Heading';
import p1 from './p1.jpg';
import p2 from './p2.jpg';


const imgList={
 "p1":p1,
 "p2":p2
}
const Mobile = ()=>{
    const [mdata,setmdata] = useState()
    useEffect(()=>{
        fetch(`http://localhost:4000/product/mobile`)
        .then(response => response.json())
        .then(json => setmdata(json))
    },[])
    const createMobileList = (mdata) =>{
        return mdata.map(({name,image},index)=>{
        let valsrc=image;
        for(var x in imgList){
            if(x === image){
                valsrc=imgList[x];
            }
        }
        return(
            <li key={index}>
               <Images src={valsrc} alt="Mobile" style={{width:"200px",height:"200px"}}/>
                <Heading heading={name}/>
            </li>
        )})
    }


    return(
        <div>
            <Heading heading="Mobile Products to Check Out"/>
            <ul style={{listStyle:"none", textAlign:"left", paddingLeft:"10px", paddingTop:"5px"}}>
               {mdata && createMobileList(mdata)}
            </ul>
        </div>
    )
}

export default Mobile;