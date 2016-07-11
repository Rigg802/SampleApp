"use strict";
const initialState = {};
const reducers = function (state = initialState, action) {
    //let nextState = Object.assign({}, state);
    switch (action.type) {
        /*
        case 'YOUR_ACTION': {
          // Modify next state depending on the action and return it
          return nextState;
        } break;
        */
        default: {
            /* Return original state if no actions were consumed. */
            return state;
        }
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;
//# sourceMappingURL=monitors.js.map