"use strict";
exports.ADD_MONITOR = 'ADD_MONITOR';
exports.REMOVE_MONITOR = 'REMOVE_MONITOR';
let monitorID = 0;
exports.addMonitor = (name) => {
    return {
        type: exports.ADD_MONITOR,
        payload: {
            name: name,
            id: monitorID++
        }
    };
};
exports.removeMonitor = (id) => {
    return {
        type: exports.REMOVE_MONITOR,
        payload: {
            id: id
        }
    };
};
const actions = {
    addMonitor: exports.addMonitor,
    removeMonitor: exports.removeMonitor
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = actions;
//# sourceMappingURL=layoutActions.js.map