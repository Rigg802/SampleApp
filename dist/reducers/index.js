"use strict";
const redux_1 = require('redux');
const layoutReducer_1 = require('../reducers/layoutReducer');
const monitorReducer_1 = require('../reducers/monitorReducer');
const fromLayout = require('../reducers/layoutReducer');
const fromMonitors = require('../reducers/monitorReducer');
const reducers = {
    layout: layoutReducer_1.default,
    monitors: monitorReducer_1.default
};
exports.rootReducer = redux_1.combineReducers(reducers);
exports.getMonitorsForLayout = (state) => (getMonitorIds(state.layout).map(id => Object.assign({}, getMonitor(state, id))));
const getMonitorIds = (state) => (fromLayout.getMonitorIds(state));
const getMonitor = (state, id) => (fromMonitors.getMonitor(state.monitors, id));
//# sourceMappingURL=index.js.map