"use strict";
const layoutActions_1 = require('../actions/layoutActions');
const initialState = {};
const reducers = function (state = initialState, action) {
    let nextState = Object.assign({}, state);
    switch (action.type) {
        // Modify next state depending on the action and return it
        case layoutActions_1.ADD_MONITOR: {
            return layoutActions_1.default['addMonitor']("test");
        }
        default: {
            /* Return original state if no actions were consumed. */
            return state;
        }
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;
//# sourceMappingURL=layoutReducer.js.map