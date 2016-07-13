"use strict";
exports.FETCH_DATA = 'FETCH_DATA';
exports.REMOVE_MONITOR = 'REMOVE_MONITOR';
const fetch = function (parameter) {
    return { type: exports.FETCH_DATA, parameter: parameter };
};
const closeMonitor = function (id) {
    return { type: exports.REMOVE_MONITOR, id: id };
};
const actions = {
    fetch: fetch
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = actions;
//# sourceMappingURL=monitorActions.js.map