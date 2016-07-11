"use strict";
exports.FETCH_DATA = 'FETCH_DATA';
const fetch = function (parameter) {
    return { type: exports.FETCH_DATA, parameter: parameter };
};
const actions = {
    fetch: fetch
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = actions;
//# sourceMappingURL=monitorActions.js.map