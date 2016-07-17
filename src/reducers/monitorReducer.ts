import { ADD_MONITOR, REMOVE_MONITOR } from '../actions';
import { MonitorState, MonitorsState } from '../models';

const initialState: MonitorsState = {
  monitors:new Array<MonitorState>()
}

const reducers = function(state = initialState, action: any) {
  switch(action.type) {
    // Modify next state depending on the action and return it
    case ADD_MONITOR: {
      return addAction(Object.assign({}, state), action.payload);
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

function addAction(state: MonitorsState, payload: any){
  let newMonitor: MonitorState = {
    id: payload.id,
    name: payload.name
  }
  state.monitors.push(newMonitor);
  return Object.assign({}, state);
}
export default reducers;

export const getMonitor = (state: MonitorsState, id: number) => ( state.monitors[id] );