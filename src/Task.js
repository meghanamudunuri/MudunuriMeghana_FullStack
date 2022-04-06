import React from "react";

// const ClickEvent = () =>{
//     const txt = document.getElementById("val").value;
//     console.log(txt);

// }

const Task = (props) => {
    return(
    <>
      <input type="text" placeholder="Enter here" id="val"/>
      <button onClick={props.task1}> submit </button>
    </>
    )

}

export default Task;