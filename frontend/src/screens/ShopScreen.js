import React, { useState, useEffect } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";

const ShopScreen = () => {
  // State
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  // Creating Shop Category
  const savonArray = [];
  const accessoryArray = [];
  for (const product of products) {
    if (product.type === "Savon") {
      savonArray.push(product);
    } else if (product.type === "Accessoire") {
      accessoryArray.push(product);
    }
  }
  // Component
  return (
    <ListGroup variant="flush">
      {/* Savon Section */}
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
      {/* Accessory Section */}
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
