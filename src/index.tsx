import { LayoutContainer } from './containers';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
// <Route path="foo" component={Foo}/>
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LayoutContainer}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
