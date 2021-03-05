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
  const categoryList = [];
  for (const product of products) {
    const thisCategory = categoryList.includes(product.category);
    if (thisCategory) {
      continue;
    } else {
      categoryList.push(product.category);
    }
  }
  // Component
  return (
    <ListGroup variant="flush">
      {categoryList.map((category) => (
        <ListGroup.Item key={category}>
          <h3 className="mt-3">{category}</h3>
          <Row>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ShopScreen;
