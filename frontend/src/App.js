import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import ShopScreen from "./screens/ShopScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/shop" component={ShopScreen} />
          <Route path="product/:id" component={ProductScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/login" component={LoginScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
