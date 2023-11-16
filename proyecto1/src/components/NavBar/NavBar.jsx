import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from './NavBar/Logo'


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> <Logo /> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#proteins">Proteins</Nav.Link>
            <Nav.Link href="#creatinas">Creatinas</Nav.Link>
            <Nav.Link href="#implementos">Implementos</Nav.Link>
            <Nav.Link href="#cart"> <CartWidget /> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
