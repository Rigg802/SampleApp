"use strict";
exports.ADD_MONITOR = 'ADD_MONITOR';
const addMonitor = function (parameter) {
    return { type: exports.ADD_MONITOR, parameter: parameter };
};
const actions = {
    addMonitor: addMonitor
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = actions;
//# sourceMappingURL=layoutActions.js.map