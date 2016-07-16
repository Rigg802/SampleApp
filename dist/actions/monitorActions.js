"use strict";
exports.FETCH_DATA = 'FETCH_DATA';
exports.REMOVE_MONITOR = 'REMOVE_MONITOR';
exports.ADD_MONITOR = 'ADD_MONITOR';
const fetch = (parameter) => ({ type: exports.FETCH_DATA, parameter: parameter });
const closeMonitor = (id) => ({ type: exports.REMOVE_MONITOR, id: id });
let monitorID = 0;
exports.addMonitor = (name) => ({
    type: exports.ADD_MONITOR,
    payload: {
        name: name,
        id: monitorID++
    }
});
const actions = {
    fetch: fetch,
    closeMonitor: closeMonitor,
    addMonitor: exports.addMonitor
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = actions;
//# sourceMappingURL=monitorActions.js.map