import React from 'react';
import '../comps/Header'
import Header from '../comps/Header';


export default {
    title: 'Custom Header Page',
    component: Header
  };

export const CustomHeadersPage = () => <div>
    <Header HeaderClass = "header1" text = "This is the header 1" fontSize = "50pt" colour = "red" onMouseOver = {Header1}></Header>
    <Header HeaderClass = "header2" text = "This is the header 2" fontSize = "40pt" colour = "yellow" onMouseOver = {Header2}></Header>
    <Header HeaderClass = "header3" text = "This is the header 3" fontSize = "30pt" colour = "blue" onMouseOver = {Header3} ></Header>
    <Header HeaderClass = "header4" text = "This is the header 4" fontSize = "20pt" colour = "green" onMouseOver = {Header4} ></Header>
    <Header></Header>
</div>

function Header1() {
    document.querySelector(".header1").innerHTML = "You hovered over header 1"
}
function Header2() {
    document.querySelector(".header2").innerHTML = "You hovered over header 2"
}
function Header3() {
    document.querySelector(".header3").innerHTML = "You hovered over header 3"
}
function Header4() {
    document.querySelector(".header4").innerHTML = "You hovered over header 4"
}
