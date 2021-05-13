import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [addressComplement, setAddressComplement] = useState(
    shippingAddress.addressComplement
  );
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        address,
        addressComplement,
        city,
        postalCode,
        country,
      })
    );
    history.push("/payment");
  };

  return (
    <FormContainer className="shippingForm">
      <CheckoutSteps step1 step2 />
      <h1>Livraison</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Votre adresse *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Votre n° et nom de rue"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="addressConplement">
          <Form.Label>Supplément d'adresse</Form.Label>
          <Form.Control
            type="text"
            placeholder="Appartement, étage..."
            value={addressComplement}
            onChange={(e) => setAddressComplement(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>Votre code postal *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Votre code postal"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Votre ville *</Form.Label>
          <Form.Control
            type="text"
            placeholder="Votre ville"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Votre pays</Form.Label>
          <Form.Control
            type="text"
            placeholder="Votre pays"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Valider
        </Button>
      </Form>
      <br />
      <p>* Champ obligatoire</p>
    </FormContainer>
  );
};

export default ShippingScreen;
