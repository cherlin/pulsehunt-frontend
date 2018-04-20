import { combineReducers } from 'redux';

const filter = (state = {}, action) => {
  if (action.type === 'CHANGE_COORDS') {
    return { ...state, location: { latitude: action.latitude, longitude: action.longitude }}
  } else if (action.type === 'CHANGE_DATE') return action.date;
  return state;
};

const reducers = combineReducers({
  filter
});

export default reducers;

