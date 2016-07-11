"use strict";
const redux_1 = require('redux');
const monitors_1 = require('../reducers/monitors');
const reducers = {
    monitors: monitors_1.default
};
exports.rootReducer = redux_1.combineReducers(reducers);
//# sourceMappingURL=index.js.map