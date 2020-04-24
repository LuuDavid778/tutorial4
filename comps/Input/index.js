import React, {useState} from 'react';
import './Input.css'; 
import CustomButton from "../CustomButton"

const Input = ({placeholder, onClick}) => {
const [val, setVal] = useState("");
return <div className="input_cont">
<input onChange = {(e)=>{
setVal(e.target.value); 
}}type = "text" placeholder= {placeholder}></input>
<CustomButton onClick ={()=>{
//alert(val); 
onClick(val);
} }text ="Send" color = "lightblue"></CustomButton>
</div>;

}


Input.defaultProps = {
placeholder:"Type your message here.",
onClick:()=>{}
}

export default Input;

// when value is changed (onChange) it wills tore the value within e, which e is used in the setVal variable which
 //targets the value of the input