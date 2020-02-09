import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarBrand className="brand" href="/">
            TRIUMPH
          </NavbarBrand>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink className="link" href="/components/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" href="#">
                Men
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" href="#">
                Women
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" href="#">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand href="/">
            <i className="fas fa-shopping-cart"></i>
          </NavbarBrand>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
