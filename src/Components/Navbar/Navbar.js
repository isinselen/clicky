
// import Navbar from "React-bootstrap/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

class isin extends React.Component {
// export default function NavExample() {

    render(){
          return (
    <Nav>
      <NavItem>
        <NavLink active href="#">
          Friends Characters
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Actor</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Actress</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          "
          I
          'll be there for you!'"
        </NavLink>
      </NavItem>
    </Nav> 
          )};

};
export default isin