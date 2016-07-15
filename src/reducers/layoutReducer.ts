import { ADD_MONITOR } from '../actions/layoutActions';
import { CLOSE_MONITOR } from '../actions/monitorActions';
import { LayoutState } from '../models/layoutModel';
import { Monitor, MonitorAction } from '../models/monitorModel';

const initialState: LayoutState = {
  monitors:new Array()
};

const reducers = (state=initialState, action: MonitorAction) => {
  switch(action.type) {
    case ADD_MONITOR: {
      return addAction(Object.assign({}, state), action.payload);
    }
    
    case CLOSE_MONITOR: {
      return Object.assign({}, state, { monitors: state.monitors.splice(action.payload.id,1) });
    }


    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

function addAction(state: LayoutState, payload: any){
  let newMonitor: Monitor = {
    id: payload.id,
    name: payload.name
  }
  // let monitors = Object.assign(state, state.monitors, )
  state.monitors.push(newMonitor);
  return state;
}


export default reducers;