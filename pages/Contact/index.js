import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Router from 'next/router';
import './contact.css';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';

var index = 0 
//step 1: create a state variable and a function to update it, also create a default value for it.
const headers_array = [
    'Thanks for contacting me.',
    'Goodbye!',
    'I will get back to you soon!',
    // {
    //     text: "hello",
    //     img: "http://..."
    // }
    // you can also use these types of variables within ur code in react
]
const Contact = () => {
    const [header_text, setHeader] = useState("Contact me!")
    const [pageleft, setLeft] = useState("-100%")
    const [img, setImg] = useState("")
    //const [index, setIndex ]= useState(0)

    useEffect(()=>{
        // written in here is what you do when something is created/born/beginning of life cycle
        setTimeout(()=> {
            setLeft("0%")
            // beginning of life cycle, change left
        },100)
       
        return ()=>{
 // what to do when the component dies
        }
    },[]);

    useEffect(()=>{
// this is the is the line to create a useEffect
// written in here is what you do when something is created/born/beginning of life cycle
    },[])

    useEffect(()=>{
        alert("Text has changed.")
        // written here is what to do when comp change
        setLeft("20%")
        setTimeout(()=>{
            //what to do when a page/component updates 
            setLeft("0%")
        },300)
            },[header_text])// written in the square bracket is what you want to track, 
        






    //step 2- Connect the state variable to the UI
  return <div className = "contactpage" style={{left: pageleft}}>
    <Header text ={header_text}></Header>
    {
        /*
    <img src ={img}/> 
    */ 
}
    <CustomButton text = "Email" onClick ={()=>{
    
        // step 3 - connect the state function() to an interaction / figure out when you want to update the interface
        setHeader(headers_array[index])
        // setHeader(headers_array[index].text)
        index++ 
        // setImg(headers_array[index].img)
        if(index > headers_array.length) {
            index = 0
        }
        // you can use arrays ^ 
        // u can change after as well 
        // setLeft("")
    }} ></CustomButton>

</div>
}
export default Contact; 