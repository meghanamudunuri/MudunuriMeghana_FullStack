import React from "react";


const Button2 = (props) => {
    return(
    <>
       <button type = "submit" onClick={(e) => props.c2(e)}>   Click Me  </button>
    </>
    )

}

export default Button2;