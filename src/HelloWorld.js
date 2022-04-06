import React, { useState } from "react";

const HelloWorld = (props) => {
    const [clicked, setClicked] = useState('no');
    const {message} = props;
    return(
        <div data-testid = "message">
            {message}
            <div data-testid = "click" onClick = {() => setClicked('yes')}>{clicked}</div>
        </div>
    )
}

export default HelloWorld;