import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { Home, About } from "./pages";
import Header from "./components/Header";
import Menu from "./components/Menu";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {/* <Nav /> */}
        <Menu />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
