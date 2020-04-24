import React from 'react';
import './Chatbox.css';
import Header from '../Header'
import { MdChatBubbleOutline} from "react-icons/md";

/* if u using images from direct directory, it will not work,
React + Storybook does not take images  like this -> <img src = "./default.png"><img>
you will have to use

const defaultimg = required('./default.png);
you must compile the image first in order to use it by this command ^ 

*/ 

const ChatBox = ({message,imagesrc, backgroundColor,name}) => <div 
style = {{backgroundColor: backgroundColor}}
className = "chat_card">
    <div className = "chat_user">   
<img src={imagesrc} className ="chat_user_img"></img>
<Header fontSize = "100%" text = {name}></Header>
<MdChatBubbleOutline id = "icon"></MdChatBubbleOutline>
</div>
<div className ="chat_msg">{message}</div>

</div>

ChatBox.defaultProps = {
message: "Please enter a message",
imagesrc: "https://placekeanu.com/190",
backgroundColor:"papayawhip",
name:"Username"
}

export default ChatBox;