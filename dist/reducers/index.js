"use strict";
const redux_1 = require('redux');
const layoutReducer_1 = require('./layoutReducer');
const monitorReducer_1 = require('./monitorReducer');
const fromLayout = require('./layoutReducer');
const fromMonitors = require('./monitorReducer');
const react_router_redux_1 = require('react-router-redux');
const reducers = {
    layout: layoutReducer_1.default,
    monitors: monitorReducer_1.default,
    routing: react_router_redux_1.routerReducer
};
exports.rootReducer = redux_1.combineReducers(reducers);
exports.getMonitorsForLayout = (state) => (getMonitorIds(state.layout).map(id => Object.assign({}, getMonitor(state, id))));
const getMonitorIds = (state) => (fromLayout.getMonitorIds(state));
const getMonitor = (state, id) => (fromMonitors.getMonitor(state.monitors, id));
//# sourceMappingURL=index.js.map