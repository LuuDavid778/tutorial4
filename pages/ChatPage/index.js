import React,{useState,useEffect} from 'react'
import './chatpage.css';
import ChatBox from '../../comps/Chatbox'
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

/*
var welcome_state = "Welcome to my application"
function setWelcome() {
welcome_state = "Start by sending a message"
document.getElementById("Welcome").innerHTML = welcome_state;
}
*/ 




const ChatPage = () => {
const [welcome,setWelcome] = useState("Welcome to my application.");
/* the line above is the same function as line 11 - 14, setWelcome = function, welcome = state  */
const [msg, setMsg] = useState("Please type a message.");
const [resp, setResp] = useState("Let me respond to you.");
const [color, setColor] = useState("red")
const [text, setText] = useState("Before useState click")
useEffect(()=>{
    setTimeout(()=> {
        document.querySelector("#Welcome").style.opacity = "100%"
    },100)
    setTimeout(()=> {
        document.querySelector("#chats").style.opacity = "100%"
    },500)
    setTimeout(()=> {
        document.querySelector("#controls").style.opacity = "100%"
    },800)
    setTimeout(()=> {
        document.querySelector("#custom_button").style.opacity = "100%"
    },900)


 

},[]);


return <div>
    <div id="Welcome">
  
        <Header fontSize={32} text = {welcome}></Header>
        
    </div>
    <div onClick = {()=>{ // this is how to make a function with no name onclick = {()=>{}}
        setWelcome("Start by sending a message.") }
    } id ="chats">
        <ChatBox name ="Keanu" message = {msg}></ChatBox>
        <p></p>
        <ChatBox name ="Young Keanu" imagesrc=" https://placekeanu.com/190/y"backgroundColor = "lightgray" message = {resp}></ChatBox>
                
 </div> 
 <div id = "controls">
     <Input onClick={(val)=>{
         setMsg(val);
        var newresp = CheckResponse(val)
        setResp(newresp);
// if (val === "Hello") {
//     setResp("Hey there!")
// }


     }}></Input>
 </div>

 <div id ="custom_button">
     <CustomButton color = {color} text = {text} onClick = {()=>{
         setText("After useState Click")
         setColor("black")
     }}></CustomButton>
 </div>
</div>

}

function CheckResponse(inp){
    switch (inp) {
        case "Hello":
            return "Hello Old Keanu."; 
        case "How are you?":
            return "I am fine, it is currently 2005, I've just finished filming the first Matrix movie, you?";
            case "I'm okay.":
                return "Why just okay? Didn't you just finish John Wick 3?";
                case "Yes I did.":
                    return "I liked the movie.";
                    case "Thanks.":
                        return "You're welcome.";
                        
        default: 
            return "I did not understand that.";
    }
}

ChatPage.defaultProps = {

}



export default ChatPage;