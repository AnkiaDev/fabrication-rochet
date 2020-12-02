import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import ShopScreen from "./screens/ShopScreen";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <ShopScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
