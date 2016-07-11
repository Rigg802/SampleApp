import { createStore } from 'redux';
import { rootReducer } from '../reducers';

declare var module:NodeModule;

const configureStore = function(initialState = {}) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      //Todo polyfill-reload
      // const nextReducer = import '../reducers!';
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore;
