import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class customNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.header>
            <Navbar.brand>
              <Link to="/">Google Books</Link>
            </Navbar.brand>
            <Navbar.Toggle />
          </Navbar.header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                Search
              </NavItem>
              <NavItem
                eventKey={2}
                componentClass={Link}
                href="/saved"
                to="/saved"
              >
                Saved
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
