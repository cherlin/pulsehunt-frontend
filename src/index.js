import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './components/NavBar';
import MapView from './containers/MapView';
import AddEpisode from './containers/AddEpisode';

import './index.css';

let store = createStore(reducers, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <BrowserRouter>
        <div className="app-container">
          <NavBar />
          <Route exact path="/" component={MapView} />
          <Route path="/episode/:id" component={MapView} />
          <Route path="/add" component={AddEpisode} />
        </div>
      </BrowserRouter>
    </React.Fragment>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();