import { combineReducers } from 'redux';

const defaultState = {
  filter: {
    location: {
      setByUser: true,
      latitude: 41.3949965,
      longitude: 2.1976155,
    }
  }
}

const filter = (state = defaultState.filter, action) => {
  switch (action.type) { 
    case 'CHANGE_COORDS':
    return { ...state, location: {...state.location, latitude: action.latitude, longitude: action.longitude, setByUser: true }}
    case 'CHANGE_DATE_INTERVAL': 
    return { ...state, date: { start: action.start, end: action.end } }
    default:
    return state;
  }
};

const episodes = (state = {}, action) => {
  switch (action.type) { 
    case 'EPISODES_FETCH_SUCCESS':
    return { ...state, filtered: [...action.episodes]}
    default:
    return state;
  }
}

const reducers = combineReducers({
  filter,
  episodes,
});

export default reducers;

