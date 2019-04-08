import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from './pages';
import Header from './components/Header';
import Menu from './components/Menu';
// import Nav from './components/Nav';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
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
