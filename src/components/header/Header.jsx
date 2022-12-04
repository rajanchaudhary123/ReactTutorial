import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const cssStyle={
    width:"70px",
    
  };
const myStyle= {
  textDecoration:"none",
  margin:"8px",
  color:"grey"
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <div>
          <NavLink to ="/">
            
          <img style={cssStyle} src={logo} alt=""/>
          </NavLink>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink style={myStyle} to="/about">About</NavLink>
            <NavLink style={myStyle} to="/contact">Contact</NavLink>
            <NavLink style={myStyle} to="/schoolform">Form</NavLink>
          </Nav>
          <Form className="d-flex">
          <NavLink to="/login">
          <Button variant="outline-primary">Login</Button>{' '}
          </NavLink>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
