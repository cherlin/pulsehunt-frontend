import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';
import MapView from './containers/MapView';
import './index.css';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <MapView />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();