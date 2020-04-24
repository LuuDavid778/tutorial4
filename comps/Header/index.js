import React from 'react';
import './header.css';


const Header = ({fontSize, colour, onMouseOver, text}) => <div>
    <h1 style={{fontSize: fontSize}}>{text}</h1>
</div>

function MouseOver() {
    alert("Mouse is over the text")
}

Header.defaultProps = {
    fontSize: "10pt",
    colour: "black",
    onMouseOver: MouseOver,
    text:"Header"
}

export default Header; 
