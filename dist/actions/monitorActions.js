"use strict";
exports.FETCH_DATA = 'FETCH_DATA';
exports.REMOVE_MONITOR = 'REMOVE_MONITOR';
const fetch = (parameter) => ({ type: exports.FETCH_DATA, parameter: parameter });
const closeMonitor = (id) => ({ type: exports.REMOVE_MONITOR, id: id });
const actions = {
    fetch: fetch,
    closeMonitor: closeMonitor
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = actions;
//# sourceMappingURL=monitorActions.js.map