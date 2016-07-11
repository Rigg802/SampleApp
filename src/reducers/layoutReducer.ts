import * as monitorActions from '../actions/monitorActions';
import { ADD_MONITOR, default as actions } from '../actions/layoutActions';

const initialState = {};

const reducers = function(state = initialState, action:any) {
 
  let nextState = Object.assign({}, state);
  switch(action.type) {
    // Modify next state depending on the action and return it
    case ADD_MONITOR: {
      return actions['addMonitor']("test");
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

export default reducers;