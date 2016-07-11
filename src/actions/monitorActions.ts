import { ActionCreatorsMapObject } from 'redux';

export const FETCH_DATA = 'FETCH_DATA';
export const REMOVE_MONITOR = 'REMOVE_MONITOR';

const fetch = function(parameter:any) {
  return { type: FETCH_DATA, parameter };
};

const closeMonitor = function(id: number) {
  return { type: REMOVE_MONITOR, id };
};

const actions:ActionCreatorsMapObject = { 
  fetch: fetch 
};

export default actions;