import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { changeDateTimeInterval, episodesFetchSuccess } from '../../actions';
import './style.css';

class DatePicker extends React.Component {

  urlEncoder = (date) => {
    return date.replace(':', '%3A');
  }

  fetchEpisodes = (start, end) => {
    const {latitude, longitude} = this.props.filter.location;
    fetch(`http://localhost:3001/episodes?lat=${latitude}&lng=${longitude}&start=${this.urlEncoder(start)}&end=${this.urlEncoder(end)}`)
      .then(episodes => episodes.json())
      .then(episodes => this.props.episodesFetchSuccess(episodes))
      .catch(err => console.error(err));
  }

  setDate = (e) => {
    e.preventDefault();
    const { changeDateTimeInterval } = this.props;
    const dateFormat = 'x'

    switch (e.target.id) {
      case 'today':
        const todayNow = moment().format(dateFormat);
        const todayEnd = moment().endOf('day').format(dateFormat);
        changeDateTimeInterval(todayNow, todayEnd);
        this.fetchEpisodes(todayNow, todayEnd);
        break;
      case 'tomorrow':
        const tomorrowStart = moment().add(1, 'days').startOf('day').format(dateFormat);
        const tomorrowEnd = moment().add(1, 'days').endOf('day').format(dateFormat);
        changeDateTimeInterval(tomorrowStart, tomorrowEnd);
        this.fetchEpisodes(tomorrowStart, tomorrowEnd);
        break;
      case 'this-week':
        const now = moment().format(dateFormat);
        const weekEnd = moment().endOf('week').format(dateFormat);
        changeDateTimeInterval(now, weekEnd);
        this.fetchEpisodes(now, weekEnd);
        break;
      default: 
        console.log('handle other date here!');
    }
  }

  render() {
    return (
      <div className="date-container">
        <p className="instruction">Choose when</p>
        <div className="vertical-group">
          <button className="dashboard-button" id="today" onClick={this.setDate}>TODAY</button>
          <button className="dashboard-button" id="tomorrow" onClick={this.setDate}>TOMORROW</button>
          <button className="dashboard-button" id="this-week" onClick={this.setDate}>THIS WEEK</button>
          <button className="dashboard-button" id="other" onClick={this.setDate}>OTHER</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    filtered: state.episodes.filtered,
  };
};

const mapDispatchToProps = (dispatch) => ({
  episodesFetchSuccess: (episodes) => dispatch(episodesFetchSuccess(episodes)),
  changeDateTimeInterval: (start, end) => dispatch(changeDateTimeInterval(start, end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);