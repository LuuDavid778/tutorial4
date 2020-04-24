import Link from 'next/link'
import Router from 'next/router';
import './index.css'
import {IoIosChatboxes} from 'react-icons/io';
import {IoMdCall} from 'react-icons/io';

function ClickIndex(){ 
    document.querySelector("#mainapp").style.left = "-200px"
        setTimeout(function(){
            Router.push("/ChatPage")
        },1000)
}

function ClickContact() {
    document.querySelector("#mainapp").style.top = "-200px"
    setTimeout(function(){
        Router.push("/Contact")
    },1000)
}

function ClickChat() {
    document.querySelector("#mainapp").style.opacity = "0%"
    setTimeout(function(){
        Router.push("/ChatPage")
    },400)
}


const Index = () => <div id ="mainapp">
    <div onClick ={ClickIndex}>Index </div>
    <div className = "button_cont">
    <div id = "div"><IoIosChatboxes></IoIosChatboxes><button onClick = {ClickChat} id = "chat_button">Chat now!</button></div>
    <div><IoMdCall></IoMdCall><button onClick = {ClickContact} id = "chat_button" >Contact</button></div>
 </div> 
 </div> 

export default Index;