import React, { Component } from 'react';
import CustomButton from '../comps/CustomButton'
import Header from "../comps/Header";
import Input from "../comps/Input";
import Chatbox from "../comps/Chatbox";
import ChatPage from "../pages/ChatPage";
// import {num, greeting} from '../comps/CustomButton'

export default {
    title: 'Chat Page Components',
    component: CustomButton
  };


 export const MyCustomButton = () => 
 <CustomButton></CustomButton>;
 export const MyCustomButtonWithStyle = () =><CustomButton 
 color = "blue"
 text = "cancel">
 </CustomButton>
 export const MyHeader = () => <Header></Header>
 export const MyInput = () => <Input></Input>
 export const MyInputWithCustomPlaceholder = () => <Input
 placeholder = " Custom placeholder"></Input>

 export const MyChatInterface= () => <Chatbox></Chatbox>

 export const MyChatPage =() => <ChatPage></ChatPage>

