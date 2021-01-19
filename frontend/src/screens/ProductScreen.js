import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Image, ListGroup, Card } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products.js";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  console.log(product);
  return (
    <>
      <Link to="/shop" className="btn btn-light my-3">
        Retour
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} avis`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Prix: {product.price}€</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
