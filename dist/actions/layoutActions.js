"use strict";
exports.ADD_MONITOR = 'ADD_MONITOR';
let monitorID = 0;
exports.addMonitor = (name) => ({
    type: exports.ADD_MONITOR,
    payload: {
        name: name,
        id: monitorID++
    }
});
const actions = {
    addMonitor: exports.addMonitor
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = actions;
//# sourceMappingURL=layoutActions.js.map