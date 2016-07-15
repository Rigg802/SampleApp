"use strict";
const redux_1 = require('redux');
const layoutReducer_1 = require('../reducers/layoutReducer');
const reducers = {
    layouts: layoutReducer_1.default
};
exports.rootReducer = redux_1.combineReducers(reducers);
//# sourceMappingURL=index.js.map