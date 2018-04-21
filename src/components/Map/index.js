import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import MapMarker from '../MapMarker';
import { changeDateTimeInterval, episodesFetchSuccess } from '../../actions';
import './style.css';

class Map extends React.Component {

  static defaultProps = {
    zoom: 13,
  };

  render() {


    return (
      <div className="map-container">
      <GoogleMap
        center={{ lng: this.props.filter.location.longitude, lat: this.props.filter.location.latitude}}
        zoom={this.props.zoom}>

        {this.props.episodes.filtered.map(episode => {
          return <MapMarker key={episode._id} lat={episode.location.coordinates[1]} lng={episode.location.coordinates[0]} name={episode.name}/>
        })}

      </GoogleMap>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
    episodes: state.episodes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  episodesFetchSuccess: (episodes) => dispatch(episodesFetchSuccess(episodes)),
  changeDateTimeInterval: (start, end) => dispatch(changeDateTimeInterval(start, end)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);