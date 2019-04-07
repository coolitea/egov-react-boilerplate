import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from './pages';
import Menu from './components/Menu';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Fragment>
    );
  }
}
