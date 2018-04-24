import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoggedInTrainer } from '../../actions';
import Dashboard from '../../components/Dashboard';
import EpisodeList from '../../components/EpisodeList';
import Map from '../../components/Map';
import Episode from '../../components/Episode';
import './style.css';

class MapView extends React.Component {

  componentWillMount() {
    fetch('http://localhost:3001/trainer/5adc8d0e3f2dcd259ad50d67')
    .then(trainer => trainer.json())
    .then(trainer => this.props.setLoggedInTrainer(trainer))
  }
  
  render() {
    return (
      <div className="mapview-container">
        <Dashboard />
        <EpisodeList />
        
        <Route exact path='/' render={(props) => <Map   
        containerElement={<div className="map-container"/>}
        mapElement={<div style={{ height: `100%` }} />} />} />

        <Route path='/episode/:id' component={Episode} />

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setLoggedInTrainer: (trainer) => dispatch(setLoggedInTrainer(trainer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapView);