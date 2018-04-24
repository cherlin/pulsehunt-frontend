import React from 'react';
import { connect } from 'react-redux';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';
import './style.css';

class Map extends React.Component {

  static defaultProps = {
    zoom: 13,
  };

  boundMarker = (id) => () => {
    console.log(id);
  }

  mapMarkers = episode => {
    return <Marker key={episode._id} onMouseOver={this.boundMarker(episode._id)} position={{ lat: episode.location.coordinates[1], lng: episode.location.coordinates[0] }} name={episode.name}/>
  }

  render() {

    return (
      <div className="map-container">
      <GoogleMap
        center={{ lng: this.props.filter.location.longitude, lat: this.props.filter.location.latitude}}
        defaultZoom={this.props.zoom}
        >

        {this.props.episodes.filtered.map(this.mapMarkers)}

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

const wrappedMap = withGoogleMap(Map)
export default connect(mapStateToProps)(wrappedMap);