import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/Menu";

const Root = () => {
  return (
    <BrowserRouter basename={"/egov-react-boilerplate"}>
      <header>
        <Header />
        <Menu />
      </header>
      <App />
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
};

export default Root;
