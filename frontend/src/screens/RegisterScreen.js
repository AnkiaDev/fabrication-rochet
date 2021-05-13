import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (!(userInfo === undefined || userInfo.length === 0)) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Les mots de passe ne correspondent pas.");
    } else {
      dispatch(register(name, email.toLowerCase(), password));
    }
  };

  return (
    <FormContainer>
      <h1>Créer un compte</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Votre Nom</Form.Label>
          <Form.Control
            type="name"
            placeholder="Votre nom et prénom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Adresse E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrer mon e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Mot de Passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Entrer mon mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirmer le Mot de Passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmer mon mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          S'enregistrer
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Vous avez déjà un compte ?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/register"}>
            Se connecter.
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
