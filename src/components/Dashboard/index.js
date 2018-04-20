import React from 'react';
import { connect } from 'react-redux';
import { changeCoords, changeAddress, changeDate } from '../../actions';
import './style.css';

class Dashboard extends React.Component {

  getCoordsFromUser = (e) => {
    e.preventDefault();
    if (geolocationAvailable) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        this.props.changeCoords(latitude, longitude);
      }, (err) => console.log(err), { timeout: 8000, maximumAge: 30000 });
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        
        <div className="geo-container">
          <p className="instruction">Choose your location</p>
          <form className="vertical-group">
            <button className="dashboard-button" onClick={this.getCoordsFromUser}>GEOLOCATE ME!</button>
            <input className="dashboard-input" type="text" placeholder="Other location" />
          </form>
        </div>

        <div className="date-container">
          <p className="instruction">Pick a date</p>
          <div className="vertical-group">
            <button className="dashboard-button">TODAY</button>
            <button className="dashboard-button">TOMORROW</button>
            <button className="dashboard-button">OTHER</button>
          </div>
        </div>

      </div>
    );
  }
}

const geolocationAvailable = () => {
  return ('geolocation' in navigator);
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCoords: (latitude, longitude) => dispatch(changeCoords(latitude, longitude)),
  changeAddress: (address) => dispatch(changeAddress(address)),
  changeDate: (date) => dispatch(changeDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);