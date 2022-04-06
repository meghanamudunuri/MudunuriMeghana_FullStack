import React from "react";

// const ChangeEvent = (e) =>{
//     console.log(e.target.value);
// }

const Task2 = (props) => {
      return(
    <div>
      <input type="text" placeholder="Enter email" id="txt" onChange={(e) => props.changeEve(e)}/>
      {/* <button>submit</button> */}
    </div>
    )
}

export default Task2;