import { rootReducer } from '../reducers';
import { createStore, Action } from 'redux';

declare var module: NodeModule;
declare var window: Window;

const configureStore = function(initialState = {}) {

  const store = createStore(
    rootReducer, initialState, window.devToolsExtension && window.devToolsExtension()
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer:any = require('../reducers');
      store.replaceReducer(nextReducer);
    })
  }

  return store
}

export default configureStore;
