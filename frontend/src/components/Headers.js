import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";

const Headers = () => {
  return (
    <header>
      <Navbar
        className="custom-bg"
        variant="light"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Fabrication Rochet</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/*<LinkContainer to="/">
               <Nav.Link>Accueil</Nav.Link>
                </LinkContainer> */}
              <LinkContainer to="/about">
                <Nav.Link>Notre Démarche</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shop">
                <Nav.Link>Boutique</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Panier
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link href="/login">
                  <i className="fas fa-user"></i> Compte
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Headers;
