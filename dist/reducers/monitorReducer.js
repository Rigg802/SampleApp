"use strict";
const actions_1 = require('../actions');
const initialState = {
    monitors: new Array()
};
const reducers = function (state = initialState, action) {
    switch (action.type) {
        // Modify next state depending on the action and return it
        case actions_1.ADD_MONITOR: {
            return addAction(Object.assign({}, state), action.payload);
        }
        case actions_1.REMOVE_MONITOR: {
            return Object.assign({}, state, { monitors: state.monitors.splice(action.payload.id, 1) });
        }
        default: {
            /* Return original state if no actions were consumed. */
            return state;
        }
    }
};
function addAction(state, payload) {
    let newMonitor = {
        id: payload.id,
        name: payload.name
    };
    state.monitors.push(newMonitor);
    return Object.assign({}, state);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;
exports.getMonitor = (state, id) => (state.monitors[id]);
//# sourceMappingURL=monitorReducer.js.map