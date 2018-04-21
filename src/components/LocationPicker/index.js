import React from 'react';
import { connect } from 'react-redux';
import Geosuggest from 'react-geosuggest';
import { changeCoords, changeAddress, episodesFetchSuccess } from '../../actions';
import './style.css';

class LocationPicker extends React.Component {

  fetchEpisodes = () => {
    const {latitude, longitude} = this.props.filter.location
    fetch(`http://localhost:3001/episodes?lat=${latitude}&lng=${longitude}`)
      .then(episodes => episodes.json())
      .then(episodes => this.props.episodesFetchSuccess(episodes))
      .catch(err => console.error(err));
  }

  getCoordsFromUserAgent = (e) => {
    e.preventDefault();
    if (geolocationAvailable) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        this.props.changeCoords(latitude, longitude);
        this.fetchEpisodes();
      }, logError, { timeout: 8000, maximumAge: 30000 });
    }
  }

  getCoordsAndAddressFromGoogle = (data) => {
    const { lat, lng } = data.location;
    const address = data.gmaps.formatted_address;
    this.props.changeCoords(lat, lng);
    this.props.changeAddress(address);
    this.fetchEpisodes();
  }

  render() {
    return (
      <div className="geo-container">
        <p className="instruction">Choose your location</p>
        <form className="vertical-group">
          <button className="dashboard-button" onClick={this.getCoordsFromUserAgent}>GEOLOCATE ME!</button>
          <Geosuggest onSuggestSelect={this.getCoordsAndAddressFromGoogle} />
        </form>
      </div>
    );
  }
}

const geolocationAvailable = () => {
  return ('geolocation' in navigator);
}

const logError = (err) => {
  console.error(err);
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCoords: (latitude, longitude) => dispatch(changeCoords(latitude, longitude)),
  changeAddress: (address) => dispatch(changeAddress(address)),
  episodesFetchSuccess: (episodes) => dispatch(episodesFetchSuccess(episodes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationPicker);