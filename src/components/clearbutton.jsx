import React from "react";
import './clearbutton.css'

export const clearbutton = ( props) =>(
    <div className="clear-btn" onCLick={props.handleClear}>{props.children}</div>
)