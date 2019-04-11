import React, { Component, Fragment } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { Home, About, Support, Policy, Terms, SamplePage } from './pages';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <header>
          <Header />
          <Menu />
        </header> */}
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sample-page" component={SamplePage} />
          <Route path="/support" component={Support} />
          <Route path="/policy" component={Policy} />
          <Route path="/terms" component={Terms} />
        </div>
        {/* <footer>
          <Footer />
        </footer> */}
      </Fragment>
    );
  }
}
