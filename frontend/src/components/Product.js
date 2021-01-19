import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded cardheight">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="card-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="mt-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} avis`}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">{product.price}€</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
