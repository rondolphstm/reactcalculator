import React from "react";
import './Clearbutton.css'

export const clearbutton = ( props) =>(
    <div className="clear-btn" onCLick={props.handleClear}>{props.children}</div>
)