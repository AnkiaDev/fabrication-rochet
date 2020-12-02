import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Headers = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Fabrication Rochet</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/about">Notre Démarche</Nav.Link>
              <Nav.Link href="/shop">Boutique</Nav.Link>
              <Nav.Link href="/cart">
                <i className="fas fa-shopping-cart"></i> Panier
              </Nav.Link>
              <Nav.Link href="/login">
                <i className="fas fa-user"></i> Compte
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Headers;
