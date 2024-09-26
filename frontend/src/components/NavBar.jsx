import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget';


function NavBar () {
    return (
      <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top" className="bg-body-tertiary">
          <Container fluid>
              <Navbar.Brand href="#home">
                  <img
                      src=" ../../public/Torx.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="Torx"
                  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="#shop">Shop</Nav.Link>
                      <Nav.Link href="#about">About Us</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              <CartWidget />
          </Container>
      </Navbar>
  </>
    )
}

export default NavBar;