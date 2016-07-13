"use strict";
exports.ADD_MONITOR = 'ADD_MONITOR';
exports.addMonitor = function (parameter) {
    return { type: exports.ADD_MONITOR, parameter: parameter };
};
const actions = {
    addMonitor: exports.addMonitor
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = actions;
//# sourceMappingURL=layoutActions.js.map