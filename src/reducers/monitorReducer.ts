import * as monitorActions from '../actions/monitorActions';

const initialState = {};

const reducers = function(state = initialState, action: any) {

  let nextState = Object.assign({}, state);
  switch(action.type) {
    // Modify next state depending on the action and return it
    case monitorActions.REMOVE_MONITOR: {
      return nextState;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
} 

export default reducers;
