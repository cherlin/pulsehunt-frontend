import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { changeCoords, changeAddress, changeDateInterval, episodesFetchSuccess } from '../../actions';
import './style.css';

class Dashboard extends React.Component {

  getCoordsFromUser = (e) => {
    e.preventDefault();
    if (geolocationAvailable) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        this.props.changeCoords(latitude, longitude);
        fetch(`http://localhost:3001/episodes?lat=${latitude}&lng=${longitude}`)
          .then(episodes => episodes.json())
          .then(episodes => this.props.episodesFetchSuccess(episodes));
      }, logError, { timeout: 8000, maximumAge: 30000 });
    }
  }

  setDate = (e) => {
    e.preventDefault();
    const { changeDateInterval } = this.props;
    switch (e.target.id) {
      case 'today':
      const today = moment().format('YYYY-MM-DD');
      return changeDateInterval(today, today);
      case 'tomorrow':
      const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
      return changeDateInterval(tomorrow, tomorrow);
      default: 
      console.log('handle other date here!');
    }
    
  }

  render() {
    const dateStyle = this.props.filter.location.setByUser ? 'date-container' : 'date-container disabled';
    const disabledButton = !this.props.filter.location.setByUser;

    return (
      <div className="dashboard-container">
        
        <div className="geo-container">
          <p className="instruction">Choose your location</p>
          <form className="vertical-group">
            <button className="dashboard-button" onClick={this.getCoordsFromUser}>GEOLOCATE ME!</button>
            <input className="dashboard-input" type="text" placeholder="Other location" />
          </form>
        </div>

        <div className={dateStyle}>
          <p className="instruction">Pick a date</p>
          <div className="vertical-group">
            <button className="dashboard-button" id="today" onClick={this.setDate} disabled={disabledButton}>TODAY</button>
            <button className="dashboard-button" id="tomorrow" onClick={this.setDate} disabled={disabledButton}>TOMORROW</button>
            <button className="dashboard-button" id="other" onClick={this.setDate} disabled={disabledButton}>OTHER</button>
          </div>
        </div>

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
  episodesFetchSuccess: (episodes) => dispatch(episodesFetchSuccess(episodes)),
  changeAddress: (address) => dispatch(changeAddress(address)),
  changeDateInterval: (start, end) => dispatch(changeDateInterval(start, end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);