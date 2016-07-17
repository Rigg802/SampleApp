"use strict";
const monitorActions = require('../actions/monitorActions');
const initialState = {
    monitors: new Array()
};
const reducers = function (state = initialState, action) {
    let nextState = Object.assign({}, state);
    switch (action.type) {
        // Modify next state depending on the action and return it
        case monitorActions.REMOVE_MONITOR: {
            return nextState;
        }
        default: {
            /* Return original state if no actions were consumed. */
            return state;
        }
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;
exports.getMonitor = (state, id) => (state.monitors[id]);
//# sourceMappingURL=monitorReducer.js.map