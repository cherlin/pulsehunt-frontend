import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

import registerServiceWorker from './registerServiceWorker';
import MapView from './containers/MapView';
import './index.css';

let store = createStore(reducers, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <MapView />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();