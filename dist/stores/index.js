"use strict";
const reducers_1 = require('../reducers');
const redux_1 = require('redux');
const configureStore = function (initialState = {}) {
    const store = redux_1.createStore(reducers_1.rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
//# sourceMappingURL=index.js.map