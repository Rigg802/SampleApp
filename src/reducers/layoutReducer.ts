import { ADD_MONITOR, REMOVE_MONITOR } from '../actions';
import { LayoutState, MonitorState, MonitorAction } from '../models';

const initialState: LayoutState = {
  monitors: []
};

const reducers = (state=initialState, action: MonitorAction) => {
  switch(action.type) {
    case ADD_MONITOR: {
      let nextState= Object.assign({}, state);
      nextState.monitors.push(action.payload.id);
      return ( Object.assign({}, state, nextState ));
    }
    
    case REMOVE_MONITOR: {
      return Object.assign({}, state, { monitors: state.monitors.splice(action.payload.id,1) });
    }


    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

export const getMonitorIds = (state: LayoutState):Array<number> => (state.monitors);


export default reducers;