import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import Layout from './containers/Layout';

const store = configureStore();

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('app')
);
