import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Fabrication Rochet <br /> Code with
            &#10084;&#65039; by AnkiaDev
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
