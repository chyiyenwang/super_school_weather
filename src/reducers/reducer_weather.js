import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload]);
      return [action.payload, ...state];
  }
  console.log('Action recieved', action);
  return state;
}