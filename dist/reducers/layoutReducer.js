"use strict";
const layoutActions_1 = require('../actions/layoutActions');
const initialState = {
    monitors: new Array()
};
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case layoutActions_1.ADD_MONITOR: {
            return addAction(Object.assign({}, state), action.payload);
        }
        case layoutActions_1.REMOVE_MONITOR: {
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
    return state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;
//# sourceMappingURL=layoutReducer.js.map