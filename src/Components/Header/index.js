import React from 'react';
import "./style.css";

function Header(props) {
  return <h1 className="Header">{props.children}</h1>;
}


  export default Header