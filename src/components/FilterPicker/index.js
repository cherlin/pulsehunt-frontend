import React from 'react';
import { connect } from 'react-redux';
import { episodesFetchSuccess } from '../../actions';
import './style.css';

class FilterPicker extends React.Component {

  render() {
    return (
      <div className="filter-container">
        <p className="instruction">Filter further</p>
        <div className="vertical-group">
          <button className="dashboard-button">SOME FILTER</button>
          <button className="dashboard-button">SOME OTHER FILTER</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    filtered: state.episodes.filtered
  };
};

const mapDispatchToProps = (dispatch) => ({
  episodesFetchSuccess: (episodes) => dispatch(episodesFetchSuccess(episodes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterPicker);