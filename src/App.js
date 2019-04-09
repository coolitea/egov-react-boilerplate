import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import { Home, About, Support, Policy, Terms, SamplePage } from './pages';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/sample-page" component={SamplePage} />
        <Route path="/support" component={Support} />
        <Route path="/policy" component={Policy} />
        <Route path="/terms" component={Terms} />
        <Footer />
      </div>
    );
  }
}
