import { ADD_MONITOR, REMOVE_MONITOR } from '../actions';
import { LayoutState, MonitorState, MonitorAction } from '../models';

const initialState: LayoutState = {
  monitors: []
};

const reducers = (state=initialState, action: MonitorAction) => {
  switch(action.type) {
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

export const getMonitorIds = (state: LayoutState):Array<number> => (state.monitors);

function addAction(state: LayoutState, payload: any){
  let newMonitor: MonitorState = {
    id: payload.id,
    name: payload.name
  }
  // let monitors = Object.assign(state, state.monitors, )
  // state.monitors.push(newMonitor);
  return state;
}


export default reducers;