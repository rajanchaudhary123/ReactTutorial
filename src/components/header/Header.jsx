import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const cssStyle={
    width:"70px",
    
  };
const myStyle= {
  textDecoration:"none",
  margin:"8px",
  color:"grey"
  };
  const [isLoading, setIsLoading] = useState(false);
  const [userState, setUserState] = useState({});

  const { fullName,avatar } = userState;

  useEffect(() => {
    let isMounted = true;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    const fetchedData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:5000/api/me", config, {
          CancelToken: source.token,
        });
        if (isMounted) {
          setUserState(res.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        if (axios.isCancel(error)) {
          console.log("Axios request is cancelled");
        } else {
          console.error(error);
        }
      }
    };

    fetchedData();
    return () =>{
        console.log("Cleaned");
        isMounted = false;
        source.cancel();
    }

  },[]);
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
            <NavLink><img
              src={`http://localhost:5000/gallery/${avatar}`}
              alt="ProfileImage"
              style={{height:"40px",width:"40px"}}
            /></NavLink>
            <NavLink style={myStyle}>{fullName}</NavLink>
          </Nav>
          <Form className="d-flex">
          <NavLink to="/register">
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
