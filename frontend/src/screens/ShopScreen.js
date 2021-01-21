import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const savonArray = [];
const accessoryArray = [];
for (const product of products) {
  if (product.type === "Savon") {
    savonArray.push(product);
  } else if (product.type === "Accessoire") {
    accessoryArray.push(product);
  }
}
const ShopScreen = () => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h3 className="mt-3">Savons</h3>
        <Row>
          {savonArray.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </ListGroup.Item>
      <ListGroup.Item>
        <h3 className="mt-3">Accessoires</h3>
        <Row>
          {accessoryArray.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ShopScreen;
