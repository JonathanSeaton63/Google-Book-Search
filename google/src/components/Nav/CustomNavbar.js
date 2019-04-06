import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <Nav
          activeKey="/Search">
          <Nav.Item>
            <Nav.Link href="/Search">Google Books Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Saved</Nav.Link>
          </Nav.Item>
        </Nav>
        
      </div>
    );
  }
}
