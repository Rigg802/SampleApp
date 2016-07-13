"use strict";
const redux_1 = require('redux');
const monitorReducer_1 = require('../reducers/monitorReducer');
const reducers = {
    monitors: monitorReducer_1.default
};
console.log("reducers exported");
exports.rootReducer = redux_1.combineReducers(reducers);
//# sourceMappingURL=index.js.map