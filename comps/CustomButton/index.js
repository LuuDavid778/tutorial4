import React,{useState,useEffect} from 'react';
import './cb.css';

const CustomButton = ({text, color, onClick}) => <div className="cb_container">
    
    <div style = {{
     backgroundColor: color}} 
    className="cb1" onClick = {onClick}>
        {text}
        </div>
</div>



function DefaultClick(){
    document.getElementById("")
}

// sets default value for the text property. 
CustomButton.defaultProps = {
    text: 'Default Button',
    color: "lightcoral",
    onClick: DefaultClick
}

// export default = if u import something, by default whatever that is specified after default is imported.
export default CustomButton; 


//  if using a regular export, you will have to use the following code import {num, greeting} name has to be exact same.
//export const num = 0;
// export const greeting = "hi";
