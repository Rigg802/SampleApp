"use strict";
const actions_1 = require('../actions');
const initialState = {
    monitors: []
};
const reducers = (state = initialState, action) => {
    switch (action.type) {
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
exports.getMonitorIds = (state) => (state.monitors);
function addAction(state, payload) {
    let newMonitor = {
        id: payload.id,
        name: payload.name
    };
    // let monitors = Object.assign(state, state.monitors, )
    // state.monitors.push(newMonitor);
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;
//# sourceMappingURL=layoutReducer.js.map