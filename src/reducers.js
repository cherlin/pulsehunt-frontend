import { combineReducers } from 'redux';

const defaultState = {
  filter: {
    location: {
      latitude: 41.3949944,
      longitude: 2.197616,
      setByUser: false,
    }
  },
  episodes: {
    filtered: [],
  }
}

const filter = (state = defaultState.filter, action) => {
  switch (action.type) { 
    case 'CHANGE_COORDS':
    return { ...state, location: {...state.location, latitude: action.latitude, longitude: action.longitude, setByUser: true }}
    case 'CHANGE_ADDRESS':
    return { ...state, location: {...state.location, address: action.address, setByUser: true }}
    case 'CHANGE_DATETIME_INTERVAL': 
    return { ...state, date: { start: action.start, end: action.end } }
    default:
    return state;
  }
};

const episodes = (state = defaultState.episodes, action) => {
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

