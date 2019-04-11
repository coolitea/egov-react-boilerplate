import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

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
