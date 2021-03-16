import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, ListGroup, Row } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";

const ShopScreen = () => {
  //State management with Redux
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // Creating Shop Category
  const categoryList = ["Accessoire", "Savon"];

  // Components
  return (
    <ListGroup variant="flush">
      <h1>Boutique</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        categoryList.map((category) => (
          <ListGroup.Item key={category}>
            <h2 className="mt-3">{category}</h2>
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
        ))
      )}
    </ListGroup>
  );
};

export default ShopScreen;
