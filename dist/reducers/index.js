"use strict";
const redux_1 = require('redux');
const layoutReducer_1 = require('../reducers/layoutReducer');
const monitorReducer_1 = require('../reducers/monitorReducer');
const fromLayout = require('../reducers/layoutReducer');
const reducers = {
    layout: layoutReducer_1.default,
    monitors: monitorReducer_1.default
};
exports.rootReducer = redux_1.combineReducers(reducers);
exports.getMonitors = (state) => (exports.getMonitorIds(state.layout));
exports.getMonitorIds = (state) => (fromLayout.getMonitorIds(state));
//# sourceMappingURL=index.js.map