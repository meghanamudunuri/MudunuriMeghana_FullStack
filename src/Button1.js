import React from "react";


const Button1 = (props) => {
    return(
    <>
      <button type = "submit" onClick={(e) => props.c1(e)}>   Click Me  </button>
    </>
    )

}

export default Button1;