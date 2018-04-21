import React from 'react';
import './style.css';

const MapMarker = ({name}) => {
  return (
    <div className="map-marker-container">
      {name}
    </div>
  )
}

export default MapMarker;