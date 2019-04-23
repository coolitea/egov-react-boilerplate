import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(reducer, initialState = {}) {
  const enhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
    // window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return createStore(reducer, initialState, enhancer);
}
