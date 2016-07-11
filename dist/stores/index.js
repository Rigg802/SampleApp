"use strict";
const redux_1 = require('redux');
const reducers = require('../reducers');
module.exports = function (initialState = {}) {
    const store = redux_1.createStore(reducers, initialState);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            //Todo polyfill-reload
            // const nextReducer = import '../reducers!';
            store.replaceReducer(reducers);
        });
    }
    return store;
};
//# sourceMappingURL=index.js.map