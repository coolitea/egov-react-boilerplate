import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import { Home, About, Support } from "./pages";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Menu />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/support" component={Support} />
          <Route path="/policy" component={Policy} />
          <Route path="/terms" component={Terms} />
        </div>
        <Footer />
        <div className="container" />
      </Fragment>
    );
  }
}
