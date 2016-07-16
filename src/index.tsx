import { LayoutContainer } from './containers';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';

const store = configureStore();

render(
  <Provider store={store}>
    <LayoutContainer />
  </Provider>,
  document.getElementById('app')
);
