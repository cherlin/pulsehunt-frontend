import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moment from 'moment';

const defaultState = {
  app: {
    addEpisode: {
      pickedPhoto: '',
      uploadSuccess: false,
    }

  },
  filter: {
    location: { // Defaults to Barcelona
      latitude: 41.3949944, 
      longitude: 2.197616,
    },
    date: { // Provides events now, and one week ahead.
      start: Date.now(),
      end: moment(Date.now()).add(7, 'days').format('x'),
    }
  },
  episodes: {
    filtered: [],
    singleEpisode: {},
  },
  user: {
    _id: '5adc8d0e3f2dcd259ad50d67',
    name: 'Tyler Durden',
    bio: 'Indie Trainer',
    photos: [],
    type: 'trainer'
  }
}

const app = (state = defaultState.app, action) => {
  switch (action.type) { 
    case 'PICK_EPISODE_PHOTO':
      return { ...state, addEpisode: {
        pickedPhoto: action.photoId,
      }}
    case 'CREATE_EPISODE_SUCCESS':
      return { ...state, addEpisode: {
        uploadSuccess: action.episodeId,
      }}
    case 'CREATE_NEW_EPISODE':
      return { ...state, addEpisode: {
        uploadSuccess: false,
      }}
    default:
      return state;
  }
};
const filter = (state = defaultState.filter, action) => {
  switch (action.type) { 
    case 'CHANGE_COORDS':
      return { ...state, location: {...state.location, latitude: action.latitude, longitude: action.longitude }}
    case 'CHANGE_ADDRESS':
      return { ...state, location: {...state.location, address: action.address }}
    case 'CHANGE_DATETIME_INTERVAL': 
      return { ...state, date: { start: action.start, end: action.end }}
    default:
      return state;
  }
};

const episodes = (state = defaultState.episodes, action) => {
  switch (action.type) { 
    case 'EPISODES_FETCH_SUCCESS':
      return { ...state, filtered: [...action.episodes]}
    case 'EPISODE_FETCH_SUCCESS':
      return { ...state, singleEpisode: {...action.episode}}
    default:
      return state;
  }
}

const user = (state = defaultState.user, action) => {
  switch (action.type) { 
    case 'UPLOADED_PHOTO_SUCCESS':
      return { ...state, photos: [...action.photos]}
    case 'SET_LOGGED_IN_TRAINER':
      return { ...state, ...action.trainer}
    default:
      return state;
  }
}

const reducers = combineReducers({
  app,
  filter,
  episodes,
  user,
  form: formReducer,
});

export default reducers;

