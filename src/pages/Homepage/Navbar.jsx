import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar,Nav } from "react-bootstrap";

function Navbar1() {
  return (
    <div>
      <Container className="navbar-style" sticky="top">
        <Navbar bg="white" expand="lg"  >
          <Link className="brand" to="/commmenu">Flight System</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="top-navbar" to="/commmenu"> 787/777 Comm</Link>
              <Link className="top-navbar" >777 FMC</Link>
              <Link className="top-navbar" >757/767 CDU</Link>
              <Link className="top-navbar" >787 FMC</Link>
              <Link className="top-navbar" >737 FMC</Link>
              <Link className="top-navbar" >320/319 CDU</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
     
    </div>
  );
}

export default Navbar1;
