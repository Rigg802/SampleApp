"use strict";
const reducers_1 = require('../reducers');
const redux_1 = require('redux');
const configureStore = function (initialState = {}) {
    const store = redux_1.createStore(reducers_1.rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            // Todo polyfill-reload
            // const nextReducer = import '../reducers!';
            store.replaceReducer(reducers_1.rootReducer);
        });
    }
    return store;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
//# sourceMappingURL=index.js.map