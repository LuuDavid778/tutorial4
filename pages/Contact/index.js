import React, {useEffect} from 'react'
import Link from 'next/link'
import Router from 'next/router';
import './contact.css';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';


const Contact = () => {
    useEffect(()=>{
        setTimeout(()=> {
            document.querySelector(".contactpage").style.left = 0;
        },100)
    
     
    
    },[]);
  return <div className = "contactpage">
    <Header text ="Contact me"></Header>
    <CustomButton text = "Email"></CustomButton>

</div>
}
export default Contact; 